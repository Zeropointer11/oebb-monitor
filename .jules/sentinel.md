## 2025-02-14 - Sensitive Header Leakage in Error Logs
**Vulnerability:** The application was logging full Axios error objects using `console.log('error:', error)`. This exposes the `error.config` object, which contains sensitive request headers like `AccessToken` and `session`.
**Learning:** Generic error logging of HTTP client errors often inadvertently leaks sensitive request data (tokens, keys) because libraries like Axios attach the request configuration to the error object.
**Prevention:** Always sanitize error objects before logging. Explicitly select safe fields (message, status, URL) and exclude or redact headers and request bodies.
