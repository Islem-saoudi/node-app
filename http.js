const http = require('node:http');

const server = http.createServer();

server.on('connection', (e) => {
    console.log(`new connection`);
})

server.listen('connection', (e) => {
    console.log(`new connection`);
})