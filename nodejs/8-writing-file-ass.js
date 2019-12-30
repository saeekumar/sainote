const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const content = 'Nodejs is Awesome';

eventEmitter.on("onFileWritingSuccess", () => {
    fs.readFile('example.txt', (err, data) => {
        if (!err) {
            console.log(data.toString());
        }
        else {
            console.log(err);
        }
    })
});

fs.writeFile('example.txt', content, (err) => {

    if (!err) {
        console.log('file writing over');
        //emit custom event
        eventEmitter.emit("onFileWritingSuccess")
    } else {
        console.log(err)
    }

});

console.log("-------------program ended---------------")



