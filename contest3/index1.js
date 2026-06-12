const fs = require("fs");
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const users = JSON.parse(data);
  const emails = users.map(user => user.email).join("\n");
  fs.writeFile("emails.txt", emails, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Emails saved to emails.txt");
  });
});