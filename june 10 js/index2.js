let users=[{
    name:"anaswar",
    age:21,
    address:[{city:"kerala",pin:1231},{city:"keral",pin:1231}]
},{
    name:"allan",
    age:21,
    address:[{city:"kerala",pin:1231}]
}]
console.log(JSON.stringify(users.filter(x=>x.address.length>=2)))