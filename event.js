const EventEmitter = require('node:events');

const emitter = new EventEmitter;

emitter.on("logged", ()=>{
    console.log(`logged by on`)
})

emitter.addListener("logged", ()=>{
    console.log(`logged by add listener`)
});

const log = require('./app.js')

log.log()


//emitter.emit("logged");