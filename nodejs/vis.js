let events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on("onSucessfulLogin", (err, data) => {
   
    console.log('logged in sucessfully');
    eventEmitter.emit("onLoadingDashBoard");
 
});
eventEmitter.on("onLoadingDashBoard",(err,data)=>{
    console.log("pls wait while loading dashboard");
});

console.log("Before last line");

eventEmitter.emit("onSucessfulLogin");


console.log("program Ends");
