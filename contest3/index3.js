const fs = require("fs");

fs.readFile("events.txt", "utf8", (err, data) => {
    if (err) {
        console.log("error");
        return;
    }

    const events = data.trim().split("\n");

    let count = {};

    for (const event of events) {
        if (count[event]) {
            count[event]++;
        } else {
            count[event] = 1;
        }
    }

    let sum = "";

    for (const event in count) {
        sum += `${event}: ${count[event]}\n`;
    }

    fs.writeFile("output.txt", sum, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Output file created!");
    });
});