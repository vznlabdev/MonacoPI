/**
 * Application Logger
 * 
 * SERVER-SIDE ONLY - Do not import in client components
 * Uses Pino for structured, performant logging
 */

// Dynamic import to avoid issues with client components
let logger: any;

if (typeof window === 'undefined') {
  // Server-side only
  const pino = require('pino');
  
  logger = pino({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    transport: process.env.NODE_ENV === 'development' 
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname',
          }
        }
      : undefined,
    formatters: {
      level: (label: string) => {
        return { level: label.toUpperCase() };
      },
    },
    base: {
      env: process.env.NODE_ENV,
    },
  });
} else {
  // Client-side fallback (should not be used)
  logger = {
    info: (...args: any[]) => console.log(...args),
    warn: (...args: any[]) => console.warn(...args),
    error: (...args: any[]) => console.error(...args),
    debug: (...args: any[]) => console.debug(...args),
  };
}

export default logger;

/**
 * Usage Examples:
 * 
 * logger.info('User signed in', { userId: 123 });
 * logger.warn('Rate limit approaching', { requests: 95 });
 * logger.error('Database connection failed', { error: err });
 * logger.debug('Debug info', { data: complexObject });
 */

