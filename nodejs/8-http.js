//using http module
const http = require('http');

//creating a server
http.createServer((req, res) => {
    console.log('req us hitting the server ');
    //handling req
    console.log(req.url);
    if (req.url == '/') {
        console.log('inside home page url');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('welcome to home page');
        res.end();
    }
    else if(req.url=='/about'){

    }
}).listen(3000, () => {
    console.log('server started');
})