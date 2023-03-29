const EventEmitter = require('node:events');

const emitter = new EventEmitter;

emitter.on("logged", (e1, e2)=>{
    console.log(`logged by on with ID`, e1)
})

emitter.addListener("logged", (e1, e2)=>{
    console.log(`logged by add listener with ID`, e2)
});

emitter.emit("logged", "azert145", "wxcfdr548");

// const log = require('./app.js')

// log.log()