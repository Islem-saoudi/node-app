// console.log(module);
// const { newArray } = require("./app.js");
// const welcome = require(`./app.js`);

// console.log(welcome);

// console.log(welcome.hello(`Islem`));

// welcome.newArray = [8, 9, 10],

// console.log(welcome.newArray);


// const khalil = require("./khalil.js");
// const donia = require("./donia.js");

//const fs = require('node:fs'); //common JScode

//import * as fs from 'node:fs'; // ECMA Script Module(ESM) code

// const files = fs.readdirSync('./');

// console.log(files)

// ***path
  
const path = require('node:path');

const pathObj = path.parse(__filename);

console.log(pathObj);

// *** OS
