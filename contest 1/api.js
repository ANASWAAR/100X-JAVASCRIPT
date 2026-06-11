let a=[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]
let r={}
for(let i=0;i<a.length;i++){
    let id=a[i].id;
    let name=a[i].name;
    r[id]=name;
}
console.log(r)