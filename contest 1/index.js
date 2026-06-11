const fs = require("fs");
const { json } = require("stream/consumers");
fs.readFile("users.json","utf8",(err,data)=>{
    if (err) {
        console.log(err);
        return;
    }
    let users = JSON.parse(data);
    let emails = "";
    for (let i = 0; i < users.length; i++) {
        emails=emails+users[i].email + "\n";
    }
    fs.writeFile("emails.txt",emails,(err)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log("SAVED")
    });
});