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
let rangeRegex = /[a-e]at/;
catStr.match(rangeRegex); // Returns ["cat"]
batStr.match(rangeRegex); // Returns ["bat"]
matStr.match(rangeRegex); // Returns null

// match range of numbers

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

// negated character set, you place a caret character (^) - set of characters that you do not want to match

let quoteSample = "3 blind mice.";
let negatedRegex = /[^0-9aeiou]/gi;
let result = quoteSample.match(negatedRegex);

// match Characters that Occur Zero or More Times

// an option that matches characters that occur zero or more times in row. The character to do this is the asterisk or star: *

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgahaa!";
let chewieRegex = /Aaa*/gi; // Change this line
let aResult = chewieQuote.match(chewieRegex);

console.log(aResult)

let rickyAndCal = "Cal and Ricky both like racing.";
// check just a beginnig of the string using ^
let carRegex = /^Cal/; // Change this line
let beginning = carRegex.test(rickyAndCal);

console.log(beginning)

// check just the end of the string on match using $
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // returns true
