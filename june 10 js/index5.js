const fs = require("fs");
fs.readFile("a.txt","utf8",(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const trimmedContent = data.trim();
    fs.writeFile("b.txt", trimmedContent,(err)=>{
        if (err){
            console.log(err);
            return;
        }
    });
});