
let events=require('events');

var eventEmitter=new events.EventEmitter();
 
eventEmitter.on("onSuccesfulLogin",(data)=>{
    console.log(data)
});

eventEmitter.emit("onSuccesfulLogin",'Logged in succesfully');

eventEmitter.on("onLoadingDashboard",(inf)=>{
    console.log(inf)
});

eventEmitter.emit("onLoadingDashboard",'plz wait while loading dashboard');