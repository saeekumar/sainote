const fs=require('fs');

const content='welcome ti file system apis';
fs.writeFile('sample.txt',content,(err)=>{
    if(!err){
        console.log('file writing over');
    }else{
        console.log(err)
    }
});
console.log("-------------program ended---------------")