const Lottery = require("./lottery");

const subscriber = new Lottery();

subscriber.on("success", (data) => {
  console.log("Registration Successful and Your Ticket Number is :", data);
});

subscriber.on("failure", (data) => {
  console.log("Limit exceeded :", data);
});

let random = Math.floor(Math.random() * 200) + 1;
subscriber.lottery(random);
