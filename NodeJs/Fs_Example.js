const fs = require("fs");
const path = require("path");

//Create Folder--use mkdir from fs to craete a new directory.mkdir takes th apath of the folder..__dirname returns the complete path till the current directory..join create a new one and add it to the specified __dirname.{} is optional parameter and the callback function with err as arguemnt to handle any error

// fs.mkdir(path.join(__dirname, "/newFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created successfully");
// });

// creating a subfolder inside the newly created folder

// fs.mkdir(path.join(__dirname, "/newFolder", "/subFolder"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created successfully");
// });

// fs.mkdir(
//   path.join(__dirname, "/newFolder", "/newsubFolder"),
//   { recursive: true },
//   (err) => {
//     if (err) throw err;
//     console.log("Folder and subfolder Created successfully");
//   }
// );

// fs.rmdir(
//   path.join(__dirname, "/newFolder", "/subfolder"),
//   { recursive: true },
//   (err) => {
//     if (err) throw err;
//     console.log("subfolder created successfully");
//   }
// );

//rmdir is to remove the folders and can make recursive true removed

//create a file and write to it

// const data = '{data:["Manon","Mani"]}'; //data must be stringified

// fs.writeFile(path.join(__dirname, "/newFolder", "test.js"), data, (err) => {
//   if (err) throw err;
//   console.log("File created with data in it");
// });

//Append the file
const newData = '{data:["Maya","Nargiza"]}';
// fs.appendFile(path.join(__dirname, "/newFolder", "test.js"), newData, (err) => {
//   if (err) throw err;
//   console.log("File is Appended..");
// });

// const dataToRead = "Hello Fbw39"; //data must be stringified

// fs.writeFile(
//   path.join(__dirname, "/newFolder", "test.txt"),
//   dataToRead,
//   (err) => {
//     if (err) throw err;
//     console.log("File created with data in it");
//   }
// );
// to read from the text file
// fs.readFile(
//   path.join(__dirname, "/newFolder", "test.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//to read the JS file
// fs.readFile(
//   path.join(__dirname, "/newFolder", "test.js"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//to rename a file

fs.rename(
  path.join(__dirname, "/newFolder", "s.js"),
  path.join(__dirname, "/newFolder", "index.js"),
  (err) => {
    if (err) throw err;
    console.log("File has been renamed");
  }
);
