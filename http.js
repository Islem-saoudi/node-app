const http = require('node:http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/home') {
        res.write ('welcome from home page');
        res.end();
    }
});

// server.on('connection', (e) => {
//     console.log(`new connection`);
// })

server.listen(3000, () => console.log(`listening on port 3000 ...`));
 
