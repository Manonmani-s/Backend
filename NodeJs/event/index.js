const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

const subscribe = new Logger();

fs.writeFile(path.join(__dirname, "logfile.txt"), "March 10,2021", (err) => {
  if (err) throw err;
  console.log("data has been logged");
});

subscribe.on("wrong", (data) => {
  fs.appendFile(
    path.join(__dirname, "logfile.txt"),
    JSON.stringify(data, null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("data has been logged");
    }
  );
});

subscribe.on("success", (data) => {
  console.log(data);
});

subscribe.log("Failed to connect to the website", "tech-error");
