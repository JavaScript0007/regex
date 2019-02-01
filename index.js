const sentence = "Hi Vladimir, are you a coder?"
// literal regex

const ex = /coder/

// regex with test method, returns true or false
console.log(ex.test(sentence))

const coder = "Coder :-)"

// wildcard regex
const wildCardEx = /Code./

// regex with match method, returns array with exact word inside of array
console.log(coder.match(wildCardEx))

// regex with character classes(character sets)

// for example, you want to match "bag", "big", and "bug" but not "bog"
// you can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

// define a range of characters to match using a hyphen

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// match range of numbers

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
