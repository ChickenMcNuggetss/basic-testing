// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

type TestCaseType = { a: number; b: number; action: Action; expected: number };

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test('should implement actions properly', () => {
    test.each(testCases)(
      'calculate properly',
      ({ a, b, action, expected }: TestCaseType) => {
        const result = simpleCalculator({ a, b, action });
        expect(result).toBe(expected);
      },
    );
  });
});
