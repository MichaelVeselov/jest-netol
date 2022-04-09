import calculateTotal from '../purchases.js';

describe('Function calculateTotal', () => {
  const input = [
    {
      id: 1,
      name: 'item-01',
      price: 33,
      count: 3,
    },
    {
      id: 2,
      name: 'item-02',
      price: 55,
      count: 2,
    },
  ];

  const discount = true;

  test('should calculate total for purchases without discount', () => {
    const expected = 209;
    const received = calculateTotal(input);
    expect(received).toBe(expected);
  });

  test('should calculate total for purchases with discount', () => {
    const expected = 172.425;
    const received = calculateTotal(input, discount);
    expect(received).toBeCloseTo(expected);
  });
});
