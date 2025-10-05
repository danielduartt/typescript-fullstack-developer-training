// Global test utilities provided by Bun
declare global {
  function describe(description: string, fn: () => void): void;
  function it(description: string, fn: () => void): void;
  function test(description: string, fn: () => void): void;
  
  namespace expect {
    interface Matchers<R> {
      toBe(expected: any): R;
      toEqual(expected: any): R;
      toBeTruthy(): R;
      toBeFalsy(): R;
      toBeNull(): R;
      toBeUndefined(): R;
      toContain(expected: any): R;
      toThrow(expected?: any): R;
    }
  }
  
  function expect<T = any>(actual: T): expect.Matchers<void>;
}

export {};