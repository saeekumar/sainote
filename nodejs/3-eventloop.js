//import events module
let events=require('events');

//create an event emitter obj
var eventEmitter=new events.EventEmitter();
 
eventEmitter.on("onReportGenerated",(data)=>{
    console.log('inside onReportGenerated ');
    console.log(data)
});
console.log('Before last line');
eventEmitter.emit("onReportGenerated",'Saee');//calling arow fn

console.log("-----------Program ended--------------");