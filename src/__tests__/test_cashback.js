import calculateCashBack from '../cashback.js';

test('should return 0 if the sum is 500', () => {
  const amount = 500;
  const expected = 0;
  const received = calculateCashBack(amount);
  expect(received).toBe(expected);
});

const dataList = [
  ['gold', 100000, 5000],
  ['silver', 10000, 200],
  ['regular', 1000, 10],
  ['no', 500, 0],
];

const handler = test.each(dataList);

handler(
  'should calculate cashback for %s status with %i amount',
  (_, amount, expected) => {
    const result = calculateCashBack(amount);
    expect(result).toBe(expected);
  },
);
