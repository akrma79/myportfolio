import { AppError, ErrorLogEntry } from '../types/errors';

class ErrorLogger {
  private logs: ErrorLogEntry[] = [];
  private maxLogs = 100;

  log(error: AppError, additionalContext?: any): void {
    const logEntry: ErrorLogEntry = {
      error: {
        ...error,
        timestamp: new Date()
      },
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: additionalContext?.stack
    };

    this.logs.unshift(logEntry);
    
    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }

    // Store in localStorage for persistence
    try {
      localStorage.setItem('errorLogs', JSON.stringify(this.logs));
    } catch (e) {
      console.warn('Failed to store error logs in localStorage');
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', logEntry);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(logEntry);
    }
  }

  private async sendToExternalService(logEntry: ErrorLogEntry): Promise<void> {
    try {
      // Replace with your actual error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logEntry),
      });
    } catch (e) {
      // Silently fail - don't create infinite error loops
      console.warn('Failed to send error to external service');
    }
  }

  getLogs(): ErrorLogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
    localStorage.removeItem('errorLogs');
  }

  // Load logs from localStorage on initialization
  loadStoredLogs(): void {
    try {
      const stored = localStorage.getItem('errorLogs');
      if (stored) {
        this.logs = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load stored error logs');
    }
  }
}

export const errorLogger = new ErrorLogger();

// Load stored logs on module initialization
errorLogger.loadStoredLogs();