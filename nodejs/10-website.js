var http = require('http');


function getTemplate(data) {
    return `<html>
    <head>
   
         <title>Trying NodeJS Http</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <ul>
            <li><a class="btn btn-primary" href='/'>Home</a></li>
            <li><a  class="btn btn-primary" href='/about'>About</a></li>
            <li><a  class="btn btn-primary" href='/contactus'>Contact us</a></li>
            <li><a  class="btn btn-primary" href='/Menu'>Menu</a></li>
            
            </ul>
            <h1>${data}</h1>
        </ul>
    </body>
    </html>`;
}
http.createServer((req, res) => {
    console.log('request hitting server....');
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.write(getTemplate("Home template"));
            break;
        case '/about':
            res.write(getTemplate("About template"));
            break;
        case '/contactus':
            res.write(getTemplate("Contact template"));
            break;
        case '/Menu':
            res.write(getTemplate("Menu template"));
            break;
    }
    res.end();
}).listen(3000, () => {
    console.log('started');
})

