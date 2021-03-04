// const Person = {
//   name: "Karl",
//   age: 33,
//   sayMyName: function () {
//     return this.name;
//   },
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introMe = () => {
    console.log(`My Name is : ${this.name}, and I am ${this.age} years old`);
  };
}

module.exports = Person;
