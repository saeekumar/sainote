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
        res.write(`<html>
            <head>
                <title>Trying NodeJS Http</title>
            </head>
            <body>
                <h1>Welcome to Home Page</h1>
            </body>
        </html>`);
        res.end();
    }
    if (req.url == '/about') {
        res.write(`<html>
            <head>
                <title>Trying NodeJS Http</title>
            </head>
            <body>
                <h1>Learn more about us here</h1>
            </body>
            </html>`);
        res.end();

    }
}).listen(3000, () => {
    console.log('server started');
})