var users = {
    21: "anaswar",
    22: "allan",
    19: "ayan"
}
let ages = Object.keys(users);
let sum = 0;
for(let age of ages){
    sum =sum+Number(age);
}
console.log(sum);