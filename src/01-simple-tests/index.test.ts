// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const mockData = { a: 2, b: 6, action: Action.Add };
    const res = simpleCalculator(mockData);
    expect(res).toBe(8);
  });

  test('should subtract two numbers', () => {
    const mockData = { a: 2, b: 6, action: Action.Subtract };
    const res = simpleCalculator(mockData);
    expect(res).toBe(-4);
  });

  test('should multiply two numbers', () => {
    const mockData = { a: 2, b: 6, action: Action.Multiply };
    const res = simpleCalculator(mockData);
    expect(res).toBe(12);
  });

  test('should divide two numbers', () => {
    const mockData = { a: 6, b: 2, action: Action.Divide };
    const res = simpleCalculator(mockData);
    expect(res).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const mockData = { a: 6, b: 2, action: Action.Exponentiate };
    const res = simpleCalculator(mockData);
    expect(res).toBe(36);
  });

  test('should return null for invalid action', () => {
    const mockData = { a: 6, b: 2, action: '|' };
    const res = simpleCalculator(mockData);
    expect(res).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const mockData = { a: NaN, b: '2', action: Action.Add };
    const res = simpleCalculator(mockData);
    expect(res).toBe(null);
  });
});
