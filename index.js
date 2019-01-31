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

// regex with character classes

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
