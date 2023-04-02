const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1>Hello world</h1>
        <p>From home page</p>`);
    }

    // the error is req.ulr not req.url

    if (req.ulr === '/about') {
        res.end('welcome from about page');
    }
    res.end(`<h1>Error Page</h1>
    <p>Page Not Found, To Go For Home Page Click <a href= "/">Here</a></p> `);

});

server.listen(3000, () => console.log(`listening on port 3000 ...`));
 
