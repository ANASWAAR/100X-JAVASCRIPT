const users= [
  {
    name:"Aman",
    orders: ["Laptop","Mouse"]
  },
  {
    name:"Riya",
    orders: ["Keyboard"]
  }
];
let a=[];
users.forEach(user=>{
    a.push(...user.orders)
})
console.log(a);