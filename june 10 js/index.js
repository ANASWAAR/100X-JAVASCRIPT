var users = {
    21: "anaswar",
    22: "allan",
    19: "ayan"
}
let entries = Object.entries(users);
let ans = "";
let minAge = 10000;
for (let i = 0; i < entries.length; i++) {
    if (Number(entries[i][0]) < minAge) {
        minAge = Number(entries[i][0]);
        ans = entries[i][1];
    }
}
console.log(ans);