let a=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]
let r={};
for(let i=0;i<a.length;i++){
    let user=a[i].user;
    let amount=a[i].amount;
    if (r[user]){
        r[user]=r[user]+amount;
    }else{
        r[user]=amount
    }
}
console.log(r);