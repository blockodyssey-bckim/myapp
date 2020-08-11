// user.js
const getName = () => {
  return "Jim";
};

exports.getName = getName;

// index.js
const user = require("./user");
console.log(`User: ${user.getName()}`);

// Exporting Multiple Methods and Values
// user.js
const getName = () => {
  return "Jim";
};

const getLocation = () => {
  return "Munich";
};

const dateOfBirth = "12.01.1982";

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;

// index.js
const user = require("./user");
console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${
    user.dob
  }.`
);

// Variations in Syntax
// user.js
exports.getName = () => {
  return "Jim";
};

exports.getLocation = () => {
  return "Munich";
};

exports.dob = "12.01.1982";

// index.js
const { getName, dob } = require("./user");
console.log(`${getName()} was born on ${dob}.`);

// Exporting a Default Value
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
      `;
  }
}

module.exports = User;

// index.js
const User = require("./user");
const jim = new User("Jim", 37, "jim@example.com");
console.log(jim.getUserStats());

// What’s the Difference Between module.exports and exports?
module.exports = {
  getName: () => {
    return "Jim";
  },

  getLocation: () => {
    return "Munich";
  },

  dob: "12.01.1982",
};

// index.js
const { getName, dob } = require("./user");
console.log(`${getName()} was born on ${dob}.`);

/* 
exports.dob 변수반환가능하다.
module.exports 객체반환해야된다.
*/