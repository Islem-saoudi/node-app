// const x = 1;

// module.exports = {
//     "newArray" : [1, 2, 3],

//     "hello" : function sayHello(name) {
//         const x = 30;
//         return `Hello ${name} + ${x}`;
//     },

    

// }


const EventEmitter = require('node:events');

const emitter = new EventEmitter;

emitter.on("logged", ()=>{
    console.log(`logged by on`)
})

module.exports = {
    "studentName" : "",
    "studentAge" : "",
    "log" : ()=> {
        emitter.emit('logged');
    }
}