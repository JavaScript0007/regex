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
