const http = require('node:http');

const server = http.createServer();

server.on('connection', (e) => {
    console.log(`new connection`);
})

server.listen(3000, () => console.log(`listening on port 3000 ...`));
 
