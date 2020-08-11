// https://uroa.tistory.com/57
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

//
var exports = (module.exports = {});

//
exports.sayHelloInEnglish = function () {
  return "HELLO";
};

exports.sayHelloInSpanish = function () {
  return "Hola";
};

//
module.exports = {
  sayHelloInEnglish: function () {
    return "HELLO";
  },

  sayHelloInSpanish: function () {
    return "Hola";
  },
};

//
var require = function (path) {
  // ...

  return module.exports;
};

// main.js
var greetings = require("./greetings.js");

// main.js
var greetings = {
  sayHelloInEnglish: function () {
    return "HELLO";
  },

  sayHelloInSpanish: function () {
    return "Hola";
  },
};

// main.js
var greetings = require("./greetings.js");

// "Hello"
greetings.sayHelloInEnglish();

// "Hola"
greetings.sayHelloInSpanish();

/*
4. 중요한 포인트

require 키워드는 object 를 반환합니다. 
그리고 module.exports 와 exports 는 
call by reference 로 동일한 객체를 바라보고 있고, 
리턴되는 값은 항상 module.exports 입니다.

모듈은 기본적으로 객체이고, 
이 객체를 module.exports, 
exports 모두 바라보고 있는데, 
최종적으로 return 되는 것은 무조건 module.exports 라는 것입니다.
*/