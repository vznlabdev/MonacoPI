# Monaco PI - Library Utilities

## rate-limit.ts

Simple in-memory rate limiting for API routes.

### Features

- **In-Memory Storage** - No external dependencies required
- **Flexible Configuration** - Customize interval and max requests
- **IP-Based** - Limits per client IP address
- **Standard Headers** - Returns proper rate limit headers
- **Auto-Cleanup** - Removes old entries automatically

### Usage

```typescript
import { rateLimit, getClientIp, createRateLimitResponse } from '@/lib/rate-limit';

export async function POST(request: Request) {
  // Get client IP
  const ip = getClientIp(request);
  
  // Apply rate limit (10 requests per minute)
  const result = rateLimit(ip, {
    interval: 60 * 1000,  // 1 minute
    maxRequests: 10,      // 10 requests max
  });

  // Check if rate limited
  if (!result.success) {
    return createRateLimitResponse(result);
  }

  // Process request normally...
}
```

### Configuration Options

```typescript
{
  interval: 60 * 1000,    // Time window in milliseconds (1 minute)
  maxRequests: 10,        // Max requests in that window
}
```

### Common Configurations

```typescript
// Strict (authentication endpoints)
{ interval: 60 * 1000, maxRequests: 5 }    // 5 per minute

// Moderate (form submissions)
{ interval: 60 * 1000, maxRequests: 10 }   // 10 per minute

// Lenient (search/read endpoints)
{ interval: 60 * 1000, maxRequests: 60 }   // 60 per minute

// Per hour limits
{ interval: 60 * 60 * 1000, maxRequests: 100 }  // 100 per hour
```

### Response Headers

Rate limit info returned in headers:
- `X-RateLimit-Limit` - Maximum requests allowed
- `X-RateLimit-Remaining` - Requests remaining in window
- `X-RateLimit-Reset` - Unix timestamp when limit resets
- `Retry-After` - Seconds to wait before retrying (429 only)

### Production Scaling

**Current**: In-memory (works for single instance)

**For Production at Scale**:
```bash
# Option 1: Upstash (Redis-based, serverless-friendly)
npm install @upstash/ratelimit @upstash/redis

# Option 2: Vercel KV (if on Vercel)
npm install @vercel/kv
```

Then update rate-limit.ts to use Redis instead of in-memory storage.

### Limitations

⚠️ **In-Memory Limitations**:
- Resets when server restarts
- Doesn't work across multiple instances
- Not suitable for high-traffic production

✅ **Good for**:
- Development
- Small production deployments
- Single-instance servers
- Starting point before scaling

---

## logger.ts

Professional logging utility using Pino.

### Features

- **Structured Logging** - JSON formatted logs for easy parsing
- **Environment-Aware** - Pretty printing in dev, JSON in production
- **Performant** - Pino is one of the fastest Node.js loggers
- **Type-Safe** - Full TypeScript support

### Usage

```typescript
import logger from '@/lib/logger';

// Info level
logger.info('User action completed', { userId: 123, action: 'submit_form' });

// Warning level
logger.warn('Rate limit approaching', { requests: 95, limit: 100 });

// Error level
logger.error({ error: err }, 'Database connection failed');

// Debug level (only shows in development)
logger.debug({ data: complexObject }, 'Debug information');
```

### Log Levels

- **debug** - Development only, detailed information
- **info** - General informational messages
- **warn** - Warning messages, potential issues
- **error** - Error messages, things that went wrong
- **fatal** - Fatal errors, application crashes

### Configuration

Configured in `src/lib/logger.ts`:

**Development**:
- Colorized output with pino-pretty
- Shows all log levels (debug and above)
- Human-readable format

**Production**:
- JSON formatted logs
- Info level and above
- Optimized for log aggregation services
- Can pipe to Cloudwatch, Datadog, etc.

### Production Integration

In production, pipe logs to your preferred service:

```bash
# CloudWatch
npm install pino-cloudwatch

# Datadog
npm install pino-datadog

# Elasticsearch
npm install pino-elasticsearch
```

### Error Reporting

Client-side errors are sent to `/api/log-error` and logged server-side.

For production, consider integrating:
- **Sentry** - Full error tracking and monitoring
- **LogRocket** - Session replay with error tracking
- **Bugsnag** - Error monitoring and reporting

### Best Practices

✅ **DO**:
- Use structured data (objects) for context
- Include relevant IDs (userId, requestId, etc.)
- Log business events (signups, purchases, etc.)
- Use appropriate log levels

❌ **DON'T**:
- Log sensitive data (passwords, tokens, PII)
- Use console.log in production code
- Log excessively (performance impact)
- Log inside tight loops

### Examples

```typescript
// Good - structured with context
logger.info({ formType: 'contact', name, email }, 'Form submission received');

// Bad - unstructured string
console.log('Form submitted');
```

```typescript
// Good - error with context
logger.error({ error: err, userId: 123 }, 'Payment processing failed');

// Bad - just error message
console.error(err.message);
```

### Migration from console.*

Replace:
```typescript
console.log('message');        → logger.info('message');
console.info('message');       → logger.info('message');
console.warn('message');       → logger.warn('message');
console.error('message');      → logger.error('message');
console.debug('message');      → logger.debug('message');
```

With context:
```typescript
logger.info({ key: value }, 'message with context');
```

