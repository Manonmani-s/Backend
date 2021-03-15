// const url = require("url");

const { url } = require("inspector");
const { rawListeners } = require("process");

//parsing the URL string using Legacy API

// const myUrl = url.parse(
//   "https://user:pass@mywebsite.com:8080/hello.html?id:100&status:active#hash"
// );

//parsing the URL string using the WHATWG

const myUrl = new URL(
  "https://user:pass@mywebsite.com:8080/hello.html?id:100&status:active#hash"
);

/* Serialized URL either the property href or stringify the url*/
console.log(myUrl.toString());
console.log(myUrl.href);
console.log(String(myUrl));

//we can access all the url properties by dot notation of the created url

//looping through params
myUrl.search = "?id=101&status=inactive";
myUrl.searchParams.forEach((value, key) => {
  console.log(key, value);
});
