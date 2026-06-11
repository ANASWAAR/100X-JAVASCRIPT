const students = [
  { name: "Aman", marks: 78 },
  { name: "Riya", marks: 91 },
  { name: "Kabir", marks: 65 }
];
students.forEach(student => {
  let grade;
  if (student.marks > 90) {
    grade = "A";
  } else if (student.marks >= 70 && student.marks <= 89) {
    grade = "B";
  } else {
    grade = "C";
  }
  console.log(student.name, grade);
});