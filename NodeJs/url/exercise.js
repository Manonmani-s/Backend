const myUrl = new URL(
  "https://digitalcareerinstitute.org/courses/web-development-course"
);

let array = myUrl.toString().split("/");
console.log(array.filter((elements) => elements.length > 0));
