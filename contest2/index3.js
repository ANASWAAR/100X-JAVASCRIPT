const students = [
  { name: "A", branch: "CSE" },
  { name: "B", branch: "ECE" },
  { name: "C", branch: "CSE" },
  { name: "D", branch: "ME" }
];
const grouped = Object.groupBy(students, item => item.branch);
for (let branch in grouped) {
  grouped[branch] = grouped[branch].map(student => student.name);
}
console.log(grouped);