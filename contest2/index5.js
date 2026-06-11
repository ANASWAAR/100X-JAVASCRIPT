const orders = [
  "Laptop",
  "Mouse",
  "Laptop",
  "Keyboard",
  "Laptop",
  "Mouse"
];
let count = {};
for (const str of orders) {
  if (count[str])
    count[str]++;
  else
    count[str] = 1;
}
let maxProduct = "";
let maxCount = 0;
for (let product in count) {
  if (count[product] > maxCount) {
    maxCount = count[product];
    maxProduct = product;
  }
}
console.log({
  product: maxProduct,
  count: maxCount
});