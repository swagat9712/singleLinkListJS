let utility = require("./Util.js");
let readlineSync = require('readline-sync');
console.log("welcome to single link list!");
let newValue = readlineSync.question("Enter node value:");
utility.insertNode(newValue);