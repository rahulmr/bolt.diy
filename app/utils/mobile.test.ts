import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isMobile } from './mobile';

describe('isMobile', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.restoreAllMocks();
  });

  it('should return true when screen width is less than 640px', () => {
    Object.defineProperty(globalThis, 'innerWidth', {
      value: 320,
      writable: true,
    });
    expect(isMobile()).toBe(true);
  });

  it('should return false when screen width is equal to 640px', () => {
    Object.defineProperty(globalThis, 'innerWidth', {
      value: 640,
      writable: true,
    });
    expect(isMobile()).toBe(false);
  });

  it('should return false when screen width is greater than 640px', () => {
    Object.defineProperty(globalThis, 'innerWidth', {
      value: 1024,
      writable: true,
    });
    expect(isMobile()).toBe(false);
  });
});
