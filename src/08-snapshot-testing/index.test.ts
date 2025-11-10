// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const list = ['meow', 'meow2', 'meow3'];
    const res = generateLinkedList(list);
    const expectedRes = {
      value: 'meow',
      next: {
        value: 'meow2',
        next: {
          value: 'meow3',
          next: {
            next: null,
            value: null,
          },
        },
      },
    };
    expect(res).toStrictEqual(expectedRes);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const list = ['meow', 'meow2', 'meow3'];
    const res = generateLinkedList(list);
    // const expectedRes = {
    //   value: 'meow',
    //   next: {
    //     value: 'meow2',
    //     next: {
    //       value: 'meow3',
    //       next: null,
    //     },
    //   },
    // };
    expect(res).toMatchSnapshot();
  });
});
