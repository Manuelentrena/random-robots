// jest.setup.ts
import '@testing-library/jest-dom';
import 'whatwg-fetch';

/* eslint-disable @typescript-eslint/no-require-imports */

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Polyfills para Node.js
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// Polyfill para TransformStream
if (typeof TransformStream === 'undefined') {
  global.TransformStream =
    require('stream/web').TransformStream || require('web-streams-polyfill').TransformStream;
}

// Polyfills para Fetch API
if (typeof Response === 'undefined') {
  const { Response, Request, Headers } = require('node-fetch');
  global.Response = Response;
  global.Request = Request;
  global.Headers = Headers;
}

// Polyfill para BroadcastChannel
class MockBroadcastChannel {
  constructor() {}
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
}
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
global.BroadcastChannel = MockBroadcastChannel as any;
