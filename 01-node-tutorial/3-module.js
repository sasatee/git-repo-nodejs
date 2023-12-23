// CommonJS - every file is module (by default)

// Module -Encapsulate Code (only share minimun)

const names = require("./4-names");
const sayHi = require("./5-utils");
const uncleBobby = require("./6-alternative-flavour");
require("./7-mind-grenade");
console.log(uncleBobby);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
