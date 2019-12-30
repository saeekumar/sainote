//Blocking or sync
var fs = require("fs");//importing file system

//reading file synchronously --so it is blocking i/o
let data = fs.readFileSync('dummy.txt');

//will be first
console.log(data.toString());

//wll be printed at last as the prgm runs
0//line by line and char by char
console.log("-----------Program ended--------------");




















