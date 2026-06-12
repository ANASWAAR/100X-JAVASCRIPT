const fs = require("fs");
fs.readFile("marks.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const s = JSON.parse(data);
  let highest = s[0].marks;
  let lowest = s[0].marks;
  let sum = 0;
  for (const student of s) {
    if (student.marks > highest) {
      highest = student.marks;
    }
    if (student.marks < lowest) {
      lowest = student.marks;
    }
    sum += student.marks;
  }
  const average = sum / s.length;
  const report =
`Highest: ${highest}
Lowest: ${lowest}
Average: ${average}`;
  fs.writeFile("report.txt", report, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});