const fs = require("fs");

fs.readFile("marks.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let students = JSON.parse(data);

    let highest = students[0].marks;
    let lowest = students[0].marks;
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        let marks = students[i].marks;

        if (marks > highest) {
            highest = marks;
        }

        if (marks < lowest) {
            lowest = marks;
        }

        sum += marks;
    }

    let average = sum / students.length;

    let report =
        "Highest: " + highest + "\n" +
        "Lowest: " + lowest + "\n" +
        "Average: " + average;

    fs.writeFile("report.txt", report, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Report created successfully!");
    });
});