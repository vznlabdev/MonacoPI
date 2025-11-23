import { NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { rateLimit, getClientIp, createRateLimitResponse } from '@/lib/rate-limit';

/**
 * Error Logging API Endpoint
 * 
 * Receives client-side errors and logs them properly
 * Rate limited to prevent abuse (10 requests per minute per IP)
 */
export async function POST(request: Request) {
  try {
    // Apply rate limiting
    const ip = getClientIp(request);
    const rateLimitResult = rateLimit(ip, {
      interval: 60 * 1000, // 1 minute
      maxRequests: 10, // 10 errors per minute max
    });

    if (!rateLimitResult.success) {
      logger.warn({
        ip,
        limit: rateLimitResult.limit,
        remaining: rateLimitResult.remaining,
      }, 'Rate limit exceeded for error logging');
      
      return createRateLimitResponse(rateLimitResult);
    }

    const errorData = await request.json();
    
    // Log error with structured data
    logger.error({
      type: 'client_error',
      message: errorData.message,
      stack: errorData.stack,
      digest: errorData.digest,
      url: errorData.url,
      timestamp: errorData.timestamp,
      userAgent: request.headers.get('user-agent'),
      ip,
    }, 'Client-side error occurred');

    return NextResponse.json(
      { logged: true }, 
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        }
      }
    );
  } catch (error) {
    // Even if logging fails, don't crash
    logger.error({ error }, 'Failed to log client error');
    return NextResponse.json({ logged: false }, { status: 500 });
  }
}


