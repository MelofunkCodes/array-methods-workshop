// //EXERCISE 1
// //using forEach to print only positive numbers of an array
// function printPositives (value) {
//     if(value > 0) {
//         console.log(value);
//     }
// }

// var a = [ -3, 0.999, -88, 7.2];

// console.log("EXERCISE 1: \n");
// a.forEach(printPositives);

// //EXERCISE 2
// //use filter method to return a new array with only positive numbers
// function getPositives (value) {
//     if(value > 0) {
//         return value;
//     }
// }

// var aFiltered;

// aFiltered = a.filter(getPositives);

// console.log("\nEXERCISE 2: ");
// console.log("Original array: ", a);
// console.log("Filtered array: ", aFiltered);

// //EXERCISE 3
// //re-do exercise 1. Filter the array. then print out numbers from filtered array
// console.log("\nEXERCISE 3: ");
// return a.filter(getPositives).forEach(printPositives);
// //why when I console.log out line 33 instead of return, print out the positive numbers and then "undefined"? because forEach does not return a value --> undefined. When you console.log(undefined) = undefined.

// //EXERCISE 4
// //filter array using one line of code
// //==============lines 38 to 53 are me trying to understand this exercise================
// var anArray = ["red", "orange", "blue", "yellow", "blue"];

// function isBlue(value){
//     return value === "blue";
// }

// // var filteredArray = anArray.filter( function(value, index, array){
// //     return isBlue(value);
// // });

// //ES6 way of making it into one line
// var filteredArray = anArray.filter( (value,index,array) => isBlue(value) );

// console.log("\nEXERCISE 4: ");
// console.log("Original array: ", anArray);
// console.log("Filtered array: ", filteredArray);

// //====MY ANSWER TO EXERCISE 4=============
// var filteredArray = anArray.filter( (value,index,array) => callback(value) );

//EXERCISE 5
//using reduce method to return longest word in string
//using reduce method to take a word and return number of characters in word

// //if you wrote function using forEach
// function longestWord(aString) {
//     var words = aString.split(" ");

//     var longestWord = "";

//     words.forEach(function(eachWord) {
//         if (eachWord.length > longestWord.length) {
//             longestWord = eachWord;
//         }
//     });

//     return longestWord;
// }

//now to convert lines 64-76 using REDUCE
function longestWord(aString) {
    var words = aString.split(" ");

    // var longestWord = "";

    /*
    Loop over the words
    if current word is longer than longestWord, make the current word longestWord
    otherwise, keep going
    */
    //can also equate var answer to lines 90-96
    return words.reduce(function(longestWord, eachWord) {
        if (eachWord.length > longestWord.length) {
            longestWord = eachWord;
        }

        return longestWord;
    }, "");
}


console.log("\nEXERCISE 5: ");
console.log("Longest word: ", longestWord("dog jumped over moon"));
console.log("Longest word: ", longestWord("I wonder if there is fried chicken here"));
console.log("Longest word: ", longestWord("television is lit these days"));
