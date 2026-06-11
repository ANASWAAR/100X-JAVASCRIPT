const users = [
  { id: 1, email: "a@test.com" },
  { id: 2, email: "b@test.com" },
  { id: 3, email: "a@test.com" },
  { id: 4, email: "c@test.com" }
];
let count = {};
users.forEach(user => {
  if (count[user.email]) {
    count[user.email]++;
  } else {
    count[user.email] = 1;
  }
});
console.log(users.filter(user => count[user.email] > 1));