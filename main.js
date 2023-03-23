// console.log(module);
// const { newArray } = require("./app.js");
// const welcome = require(`./app.js`);

// console.log(welcome);

// console.log(welcome.hello(`Islem`));

// welcome.newArray = [8, 9, 10],

// console.log(welcome.newArray);


// const khalil = require("./khalil.js");
// const donia = require("./donia.js");

// *** File System (FS)

//const fs = require('node:fs'); //common JScode

//import * as fs from 'node:fs'; // ECMA Script Module(ESM) code

// const files = fs.readdirSync('./');

// console.log(files)

// ***path
  
// const path = require('node:path');

// const pathObj = path.parse(__filename);

// console.log(pathObj);

// *** OS (Operating System)
 
// const os = require('node:os');

// const freeMem = os.freemem();

// const totalMem = os.totalmem();

// console.log(`
// Total memory: ${totalMem}
// Free Memory: ${freeMem}`)


//const fs = require('node:fs'); //common JScode


// ***CJS
// const files = fs.readdir('./', function (err, files) {

//     if (err) console.log(`Error`, err);
    
//     else console.log(`Result`, files);
// });


// ***ESM
// const files = fs.readdir('./', (err, files) => {

//     (err) ? console.log(`Error`, err) : console.log(`Result`, files);
// });

// console.log(files)

const fs = require('node:fs');

const data = fs.readFile('./students.json', (e, result) => {
    e ? console.error(e) : console.log(result.toString());
 
});

console.log(data)