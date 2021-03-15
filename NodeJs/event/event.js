// const emitter = require("events").EventEmitter;
//alternative for the above code would be the following

const Emmiter = require("events");

//Create a instance from emitter class
class CustomEmitter extends Emmiter {}

const e = new CustomEmitter();
// console.log(e);

e.on("wakeup", () => {
  console.log("Good Morning");
});

e.emit("wakeup");
