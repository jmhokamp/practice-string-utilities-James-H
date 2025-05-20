const stringUtils = require('./stringUtils.js')

console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.capitalize("tesing out stuff here."));
console.log(stringUtils.capitalize(421));
console.log(stringUtils.capitalize(""));

console.log(stringUtils.reverse("This string will be reversed!"));
console.log(stringUtils.reverse("Look a string with a Number!"))
console.log(stringUtils.reverse(42));
console.log(stringUtils.reverse(""));

console.log(stringUtils.contains("Hello World", "Hello"));
console.log(stringUtils.contains("Hello", "Bye"));
console.log(stringUtils.contains("test", undefined));