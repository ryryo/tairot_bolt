import '@testing-library/jest-dom';

// Mock sessionStorage
const mockStorage = {};

beforeAll(() => {
  global.sessionStorage = {
    getItem: (key) => mockStorage[key],
    setItem: (key, value) => {
      mockStorage[key] = value;
    },
    removeItem: (key) => {
      delete mockStorage[key];
    },
    clear: () => {
      Object.keys(mockStorage).forEach((key) => {
        delete mockStorage[key];
      });
    },
  };
});

afterEach(() => {
  // Clear sessionStorage after each test
  global.sessionStorage.clear();
});