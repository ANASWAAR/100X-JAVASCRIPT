const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const upper = data.toUpperCase();

    fs.writeFile("uppercase.txt", upper, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.readFile("uppercase.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            const words = data.trim().split(/\s+/);
            const count = words.length;

            const summary = `Total words: ${count}`;

            fs.writeFile("summary.txt", summary, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("Files created successfully!");
            });
        });
    });
});