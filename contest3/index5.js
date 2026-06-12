const fs = require("fs");

fs.readFile("students.json", "utf8", (err, studentsData) => {
    if (err) {
        console.log(err);
        return;
    }

    const students = JSON.parse(studentsData);

    fs.readFile("marks.json", "utf8", (err, marksData) => {
        if (err) {
            console.log(err);
            return;
        }

        const marks = JSON.parse(marksData);

        let report = "";

        for (const student of students) {
            const mark = marks.find(m => m.id === student.id);
            report += `${student.name} - ${mark.marks}\n`;
        }

        fs.writeFile("report.txt", report, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("report.txt created successfully");
        });
    });
});