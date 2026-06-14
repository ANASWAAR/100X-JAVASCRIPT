const colleges = [
  {
    name: "MITS",
    departments: [
      { name: "CSE", students: [{ name: "A", cgpa: 8.2 }, { name: "B", cgpa: 9.1 }] },
      { name: "ECE", students: [{ name: "C", cgpa: 7.5 }] }
    ]
  },
  {
    name: "NIT",
    departments: [
      { name: "ME", students: [{ name: "D", cgpa: 8.8 }, { name: "E", cgpa: 6.9 }] }
    ]
  }
];
let result = [];
for (const college of colleges) {
    for (const dept of college.departments) {
        for (const student of dept.students) {
            if (student.cgpa >= 8) {
                result.push({
                    name: student.name,
                    cgpa: student.cgpa,
                    college: college.name,
                    dept: dept.name
                });
            }
        }
    }
}
console.log(result);