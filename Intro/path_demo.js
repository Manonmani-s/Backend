const path = require("path");
//Its a core module already  included within node.JS

//console.log(path);

//get the base file name(path.basaname)

// console.log(path.basename(__filename)); //returns path_demo.js that is the current file

//get the directory name
// console.log(__filename);
// console.log(path.dirname(__filename)); //returns the directory of the given filename

//get the file extension(path.extname)
// console.log(path.extname(__filename));

//create path  Object - path.parse()

const obj = path.parse(__filename);
console.log(obj);

//concatenate paths : joining a path into another path
//(path.join)
const newPath = path.join(__dirname, "test", "example.html");
console.log(newPath);
