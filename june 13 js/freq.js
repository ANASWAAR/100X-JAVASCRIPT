const orders = [
  "Laptop", "Mouse", "Laptop", "Keyboard",
  "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"
];
let freq = {};
for (let item of orders) {
    freq[item] = (freq[item] || 0) + 1;
}
let arr = Object.entries(freq);
arr.sort((a, b) => b[1] - a[1]);
console.log({
    product: arr[1][0],
    count: arr[1][1]
});