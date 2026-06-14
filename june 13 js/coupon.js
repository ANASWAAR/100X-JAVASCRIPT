const cart = [
  { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
  { name: "Mouse", price: 500, qty: 2, category: "electronics" },
  { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
];

const coupons = {
  electronics: 0.10,   // 10% off
  fashion: 0.20        // 20% off
};
let total = 0;
for(const item of cart){
    const discount = coupons[item.category] || 0;
    total +=item.price * item.qty*(1-discount);    
}
console.log(`final amount :${total}`);