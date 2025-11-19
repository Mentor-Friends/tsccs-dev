# Observable Error Handling Guide

## Overview

The observable system now has comprehensive error handling that propagates errors from the lowest levels (data formatting functions) all the way up to your application code. This enables proper debugging and error recovery.

## Complete Error Chain

### Error Flow

```
User Code (subscribe/execute)
    ↓
SchemaQueryObservable.subscribe() [catches errors]
    ↓
SchemaQueryObservable.bind() [catches errors]
    ↓
SchemaQueryObservable.build() [catches errors]
    ↓
formatConnectionsDataId() [catches errors]
    ↓
FormatFunctionData() [catches errors]
    ↓
FormatFunctionDataForData() [catches errors]
    ↓
FormatFromConnectionsAlteredArrayExternal() [catches errors]
    ↓
Individual connection processing [catches errors]
```

Each level:
1. Catches errors with try-catch
2. Logs the error with context
3. Re-throws the error to propagate it up

## Usage Examples

### Basic Usage with Error Handling

```typescript
const query = new FreeschemaQuery();
query.type = "BlogPost";
query.outputFormat = DATAID;

const observer = SchemaQueryListener(query, token);

try {
    await observer.subscribe(
        (data) => {
            console.log('Success:', data);
        },
        (error) => {
            // Optional error callback
            console.error('Error in observable:', error);
            // Handle error in UI
            showErrorToUser(error.message);
        }
    );
} catch (err) {
    // This catch will receive all errors from lower levels
    console.error('Failed to execute query:', err);

    // You'll get detailed error messages like:
    // "Failed to format function data: <original error>"
    // "Failed to prefetch connections: <original error>"
    // etc.
}
```

### Using Execute (One-time Query)

```typescript
const query = new FreeschemaQuery();
query.type = "User";

try {
    const results = await SchemaQuery(query, token);
    console.log('Query results:', results);
} catch (err) {
    console.error('Query failed:', err);

    // Error will include context about which step failed:
    // - "Error in SchemaQueryObservable.run()"
    // - "Error in SchemaQueryObservable.build()"
    // - "Failed to format from connections altered array external"
    // etc.
}
```

### Advanced: Handling Specific Error Types

```typescript
const observer = SchemaQueryListener(query, token);

try {
    await observer.subscribe(
        (data) => {
            console.log('Data received:', data);
        },
        (error) => {
            // Categorize errors
            if (error.message.includes('prefetch connections')) {
                console.error('Network/database error fetching connections');
                // Show "Connection issue" message to user
            } else if (error.message.includes('format function data')) {
                console.error('Data formatting error');
                // Show "Data processing error" message
            } else {
                console.error('Unknown error:', error);
            }
        }
    );
} catch (err) {
    // Fallback error handler
    console.error('Critical error:', err);
    showCriticalErrorDialog();
}
```

### Handling Errors in Event Listeners

When data updates automatically (due to changes in tracked concepts), errors are caught and logged:

```typescript
const observer = SchemaQueryListener(query, token);

await observer.subscribe((data) => {
    console.log('Updated data:', data);
});

// If an error occurs during automatic update:
// - Error is logged to console with context
// - isUpdating flag is reset
// - Error is re-thrown but doesn't crash the app
// - Subscribers continue to work
```

## Error Messages You'll See

### From formatConnectionsDataId

- `"Failed to prefetch connections: <error>"`
- `"Failed to get connection type for count: <error>"`
- `"Failed to order connections: <error>"`
- `"Failed to format function data: <error>"`
- `"Failed to format function data for data: <error>"`
- `"Failed to format from connections altered array external: <error>"`

### From Lower-Level Functions

- `"Error processing connection at index X: <error>"` - Indicates which connection failed
- `"Error processing main composition at index X: <error>"` - Indicates which main composition failed
- `"Error in FormatFunctionData: <error>"`
- `"Error in FormatFunctionDataForData: <error>"`
- `"Error in FormatFromConnectionsAlteredArrayExternal: <error>"`

### From Observable Layer

- `"Error in subscribe: <error>"`
- `"Error in SchemaQueryObservable.run(): <error>"`
- `"Error in SchemaQueryObservable.bind(): <error>"`
- `"Error in SchemaQueryObservable.build(): <error>"`

### From Event Listeners

- `"Error in typeHandler event listener: <error>"`
- `"Error in event listener for concept X: <error>"`

## Benefits

### 1. **Clear Error Context**
Every error message tells you exactly which function/step failed, making debugging much easier.

### 2. **Partial Failure Handling**
If one connection fails to process, others continue and you get partial results.

### 3. **Error Propagation**
Errors bubble up with context, so you can catch them at the appropriate level.

### 4. **Console Debugging**
All errors are logged to console with full context before re-throwing.

### 5. **Graceful Degradation**
Event listeners handle errors without crashing the entire observable system.

## Best Practices

### 1. Always Use Try-Catch

```typescript
try {
    await observer.subscribe(callback);
} catch (err) {
    // Handle error appropriately
}
```

### 2. Provide Error Callbacks

```typescript
observer.subscribe(
    (data) => { /* success */ },
    (error) => { /* error handling */ }
);
```

### 3. Check Console Logs

All errors are logged with detailed context. Check your browser console for debugging information.

### 4. Handle Network Errors Differently

```typescript
try {
    await observer.subscribe(callback);
} catch (err) {
    if (err.message.includes('prefetch') || err.message.includes('network')) {
        // Network error - maybe retry?
        showRetryButton();
    } else {
        // Data error - log and report
        reportErrorToServer(err);
    }
}
```

### 5. Don't Ignore Errors

```typescript
// ❌ BAD - Silent failure
observer.subscribe((data) => console.log(data));

// ✅ GOOD - Proper error handling
try {
    await observer.subscribe(
        (data) => console.log(data),
        (error) => console.error(error)
    );
} catch (err) {
    handleError(err);
}
```

## Testing Error Handling

### Simulate Errors for Testing

```typescript
// Test connection prefetch error
const testQuery = new FreeschemaQuery();
testQuery.type = "NonExistentType";

try {
    await SchemaQuery(testQuery, "invalid-token");
} catch (err) {
    console.log('Caught expected error:', err.message);
    // Should see: "Failed to prefetch connections: ..."
}
```

### Check Error Propagation

```typescript
const observer = SchemaQueryListener(query, token);

let errorReceived = false;

try {
    await observer.subscribe(
        (data) => console.log('Success'),
        (error) => {
            errorReceived = true;
            console.log('Error callback called:', error);
        }
    );
} catch (err) {
    console.log('Outer catch:', err);
}

console.log('Error properly propagated:', errorReceived);
```

## Debugging Tips

### 1. Enable Detailed Logging

All error handlers log to console. Make sure your console is visible during development.

### 2. Check Error Stack Traces

The re-thrown errors preserve stack traces, so you can trace back to the original error source.

### 3. Use Browser DevTools

Set breakpoints in the error handlers to inspect the error object and application state.

### 4. Test Individual Functions

You can test lower-level functions directly to isolate issues:

```typescript
import { formatConnectionsDataId } from './Services/Search/SearchWithTypeAndLinker';

try {
    const result = await formatConnectionsDataId(linkers, conceptIds, mainIds, reverse, countInfos, order);
} catch (err) {
    console.error('Direct function test failed:', err);
}
```

## Summary

The error handling system now provides:

✅ Complete error propagation from lowest to highest level
✅ Detailed context for each error
✅ Console logging at every level
✅ Optional error callbacks
✅ Graceful degradation for partial failures
✅ Stack trace preservation
✅ Proper cleanup (isUpdating flag reset)

You can now confidently debug issues in production and development by examining the error messages and console logs.
