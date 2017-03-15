// Require NPM packages and dependecies for flashcard module.
var inquirer = require("inquirer"); //original plan to use Inquirer to collect the info for each card/since abandoned
var fs = require("fs");
var moduleExports = require("./moduleExports.js");
var cardsTextFile = "log.txt";
//* My original goal was for the FCG to read cards logged to a log.txt file (similar to techniques used in LIRI) with the inquirer package 
//* and use that data to create a new card by calling on the constructor methods (ClozeFlashcard.js & BasicFlashcard.js) and run it to show its new data.
function createCards { // function to create cards.
fs.readFile(cardsTextFile, 'utf8', function (error, data) { // calls on the file system, and refernces a global variable i planned on creating (cardsTextFile) references a (log.txt file in the module folder)
var cards = data.split("\r\n"); // Split function to address text on line breaks.
cards.forEach(function (card) {
if (card.type === "basic") { // if card type chosen by user was "basic" then refernce moduleExports>then "basicflashcard" constructor
var newBasicCard = moduleExports.BasicFlashcard(card.front, card.back); 
console.log(newBasicCard.showFront()); console.log(newBasicCard.showBack()); // Log the results
} else {// Create a cloze card if the type is cloze.
var newClozeCard = moduleExports.ClozeFlashcard(card.text, card.cloze); 
console.log(newClozeCard.showAll());// Log the results
console.log(newClozeCard.showPartial());
console.log(newClozeCard.showCloze()); }
            }
        });
    });
};
