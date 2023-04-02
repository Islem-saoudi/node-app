const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1>Hello world</h1>
        <p>From home page</p>`);
    }
    if (req.url === '/home') {
        res.write ('welcome from about page');
        res.end();
    }
});

server.listen(3000, () => console.log(`listening on port 3000 ...`));
 
