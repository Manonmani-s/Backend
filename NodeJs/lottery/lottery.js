const Emitter = require("events");
const uuid = require("uuid");

class Lottery extends Emitter {
  lottery(registrationid) {
    if (registrationid < 100) {
      this.emit("success", {
        id: uuid.v4(),
        user: registrationid,
      });
    } else {
      this.emit("failure", {
        id: uuid.v4(),
        user: registrationid,
      });
    }
  }
}

module.exports = Lottery;
