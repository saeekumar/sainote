let events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on("onLoadingDashBoard", () => {
    console.log('plz wait to emit inside one');
});

eventEmitter.on("onLoginSucessful", () => {
    console.log('logged in sucessfully');

    //we hav to declare fun before call so we put on top
    eventEmitter.emit("onLoadingDashBoard");

});

eventEmitter.emit("onLoginSucessful");