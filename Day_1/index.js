// Fs means file system for read and write  fs treat as script tag
// fs.mkdirSync("frilename")/*for making folder
// writefileSync fo writing in file
// append for adding somethinb
// rename for changing name
// unlink fo deleting  file 
// rmdir for deleting  folder
const fs =require("fs");

fs.mkdirSync("day_1");

fs.writeFileSync("day_1/hello.txt","hello");
fs.appendFileSync("day_1/hello.txt","isha")
const data=fs.readFileSync("day_1/hello.txt","utf-8")
console.log(data)
fs.renameSync("day_1/hello.txt", "day_1/hello2.txt")
fs.unlinkSync("day_1/hello2.txt")
fs.rmdirSync("day_1")

