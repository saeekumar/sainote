var fs = require("fs");

//non blocking io
fs.readFile('dummy.txt',(err,data)=>{
    //with errors first call back using arrow fn
    if(!err){
        console.log(data.toString());
    }
    else{
        console.log(err);
    }
});
//the following line will get executed first while fs is rading the file


console.log("-----------Program ended--------------");




















