const fs = require("fs");
const a= fs.readFileSync("a.txt","utf-8");
const trim=a.trim()
fs.writeFileSync("c.txt",trim)