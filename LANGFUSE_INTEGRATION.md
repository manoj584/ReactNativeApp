# Langfuse Integration

This React Native application has been integrated with Langfuse for AI observability and tracing.

## Setup

### Environment Variables
The following environment variables are configured in `.env`:
```
LANGFUSE_SECRET_KEY="sk-lf-125d6eb9-f2a3-46b2-b577-6d35d3cc100f"
LANGFUSE_PUBLIC_KEY="pk-lf-75cdfbe4-e72d-4328-8bc6-dbc5ab1962f1"
LANGFUSE_BASE_URL="https://us.cloud.langfuse.com"
```

### Dependencies
The following packages have been installed:
- `@langfuse/tracing` - Langfuse tracing SDK
- `@langfuse/otel` - Langfuse OpenTelemetry integration
- `@opentelemetry/sdk-node` - OpenTelemetry SDK

## Usage

### Basic Tracing

```javascript
import { getLangfuseClient } from '../utils/langfuse';

const langfuse = getLangfuseClient();

// Track screen navigation
langfuse.trackScreen('HomeScreen', {
  timestamp: new Date().toISOString(),
});

// Track user actions
langfuse.trackAction('button_click', {
  buttonName: 'Submit',
  location: 'ContactForm',
});
```

### Advanced Usage

```javascript
// Set user ID for tracking
langfuse.setUserId('user_123');

// Set session ID
langfuse.setSessionId('session_abc');

// Create custom spans
const span = langfuse.createSpan('custom_operation', 'span', {
  customMetadata: 'value',
});

// End span with output
langfuse.endSpan(span, { result: 'success' });

// Manual flush
await langfuse.flush();
```

## Current Implementation

### Automatic Tracing
- **App Launch**: Tracks when the application starts
- **Screen Navigation**: Automatically tracks screen changes via NavigationContainer
- **Home Screen**: Tracks user interactions like search and card clicks

### Manual Tracing
Key screens can be manually instrumented:
```javascript
useEffect(() => {
  langfuse.trackScreen('ScreenName');
}, [langfuse]);
```

## Architecture

Since React Native doesn't support Node.js-specific OpenTelemetry, this implementation uses:
- Direct HTTP calls to Langfuse ingestion API
- Custom client implementation for React Native compatibility
- Event queue with automatic flushing in development mode
- Basic authentication for API security

## Best Practices

1. **Screen Tracking**: Always track screen views in `useEffect`
2. **User Actions**: Track meaningful user interactions
3. **Error Handling**: The client automatically re-queues failed events
4. **Development**: Auto-flush is enabled in development mode
5. **Production**: Consider manual flushing for critical operations

## Langfuse Dashboard

View traces and analytics at: https://us.cloud.langfuse.com

## Troubleshooting

### Events not appearing in Langfuse
- Check environment variables are set correctly
- Verify network connectivity
- Check console for error messages
- Ensure API keys are valid

### Authentication errors
- Verify public and secret keys match your Langfuse project
- Check that the base URL is correct for your region

## Future Enhancements

- Add user authentication tracking
- Implement error boundary tracing
- Add performance monitoring
- Integrate with LLM calls if AI features are added
- Add offline support with event persistence