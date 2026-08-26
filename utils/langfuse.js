import { Platform } from 'react-native';

// Simple Langfuse integration for React Native
// Since React Native doesn't support Node.js-specific OpenTelemetry,
// we'll use a direct HTTP approach for tracing

class LangfuseClient {
  constructor() {
    this.publicKey = process.env.LANGFUSE_PUBLIC_KEY || 'pk-lf-75cdfbe4-e72d-4328-8bc6-dbc5ab1962f1';
    this.secretKey = process.env.LANGFUSE_SECRET_KEY || 'sk-lf-125d6eb9-f2a3-46b2-b577-6d35d3cc100f';
    this.baseUrl = process.env.LANGFUSE_BASE_URL || 'https://us.cloud.langfuse.com';
    this.ingestionUrl = `${this.baseUrl}/api/public/ingestion`;
    this.queue = [];
    this.userId = null;
    this.sessionId = null;
    this.traceId = this.generateTraceId();
    this.enabled = __DEV__; // Only enable in development by default
    this.debug = __DEV__; // Enable debug logging in development
  }

  generateTraceId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  setUserId(userId) {
    this.userId = userId;
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId;
  }

  // Create a span/observation
  createSpan(name, type = 'span', metadata = {}) {
    const spanId = this.generateTraceId().substring(0, 16);
    const timestamp = new Date().toISOString();
    
    const span = {
      id: spanId,
      traceId: this.traceId,
      name: name,
      startTime: timestamp,
      endTime: timestamp, // Will be updated when span ends
      metadata: {
        ...metadata,
        platform: Platform.OS,
        userId: this.userId,
        sessionId: this.sessionId,
      },
      level: 'DEFAULT',
    };

    return span;
  }

  // End a span and queue it for sending
  endSpan(span, output = null, endTime = null) {
    if (!this.enabled) return;
    
    span.endTime = endTime || new Date().toISOString();
    if (output) {
      span.output = output;
    }
    
    this.queue.push(span);

    // Auto-flush for development
    if (__DEV__) {
      this.flush();
    }
  }

  // Track screen navigation
  trackScreen(screenName, metadata = {}) {
    if (!this.enabled) return;
    
    const span = this.createSpan(`screen_${screenName}`, 'span', {
      ...metadata,
      screen: screenName,
    });
    this.endSpan(span);
  }

  // Track user actions
  trackAction(actionName, metadata = {}) {
    if (!this.enabled) return;
    
    const span = this.createSpan(`action_${actionName}`, 'span', {
      ...metadata,
      action: actionName,
    });
    this.endSpan(span);
  }

  // Send queued events to Langfuse
  async flush() {
    if (this.queue.length === 0) return;

    const events = [...this.queue];
    this.queue = [];

    try {
      // Create Basic Auth header
      const credentials = `${this.publicKey}:${this.secretKey}`;
      let auth;
      
      // React Native compatible base64 encoding
      try {
        auth = btoa(credentials);
      } catch (e) {
        // Fallback for environments where btoa might not work
        console.warn('btoa not available, skipping Langfuse auth');
        auth = '';
      }
      
      if (this.debug) {
        console.log('Sending to Langfuse:', events.length, 'events');
      }
      
      // Create ingestion payload in Langfuse format
      const payload = {
        batch: events.map(event => ({
          id: event.id,
          traceId: event.traceId,
          name: event.name,
          startTime: event.startTime,
          endTime: event.endTime,
          metadata: event.metadata,
          level: event.level || 'DEFAULT',
        })),
      };

      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (auth) {
        headers['Authorization'] = `Basic ${auth}`;
      }

      if (this.debug) {
        console.log('Langfuse payload:', JSON.stringify(payload, null, 2));
      }

      const response = await fetch(this.ingestionUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Langfuse ingestion failed:', response.status, errorText);
        if (this.debug) {
          console.error('Failed payload:', JSON.stringify(payload, null, 2));
        }
      } else {
        if (this.debug) {
          console.log('Langfuse ingestion successful');
        }
      }
    } catch (error) {
      console.error('Error sending to Langfuse:', error);
      // Re-queue events on failure
      this.queue = [...events, ...this.queue];
    }
  }
}

// Singleton instance
let langfuseInstance = null;

export const getLangfuseClient = () => {
  if (!langfuseInstance) {
    langfuseInstance = new LangfuseClient();
  }
  return langfuseInstance;
};

export default getLangfuseClient;