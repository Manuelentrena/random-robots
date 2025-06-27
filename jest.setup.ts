// jest.setup.ts
import '@testing-library/jest-dom';

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

// jest.setup.js
/* eslint-disable @typescript-eslint/no-require-imports */
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
