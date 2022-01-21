//run using command "node main.js"

//will be used as main JS file. Everything else will be server-side.


const helpers = require("./helpers"); //require allows you to import a module
const moreHelpers = require("./morehelpers");
const evenMoreHelpers = require("./evenMoreHelpers")
helpers.sayHi();

console.log(moreHelpers.firstName);//these are all exports
moreHelpers.sayHello();
moreHelpers.sayGoodbye();

evenMoreHelpers()

