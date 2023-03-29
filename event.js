const EventEmitter = require('node:events');

const emitter = new EventEmitter;

emitter.on("logged", (...e)=>{
    console.log(`logged by on with ID`, e[0])
})

emitter.addListener("logged", (...e)=>{
    console.log(`logged by add listener with ID`, e[1])
});

emitter.emit("logged", "azert145", "wxcfdr548");

// const log = require('./app.js')

// log.log()