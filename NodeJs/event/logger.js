const Emitter = require("events");
const uuid = require("uuid");

class Logger extends Emitter {
  log(issue, type) {
    if (type == "tech-error") {
      this.emit("wrong", {
        id: uuid.v4(),
        details: issue,
      }); //here this is the instance of class logger
    } else {
      this.emit("success", {
        id: uuid.v4(),
        details: issue,
      });
    }
  }
}

module.exports = Logger;
