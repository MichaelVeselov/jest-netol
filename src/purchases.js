export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.count,
    0,
  );

  if (applyDiscount) {
    return sum * 0.825;
  }
  return sum;

  /* let result = 0;
    for (const purchase of purchases) {
        result += purchase.price * purchase.count;
    }
    return result; */
}
