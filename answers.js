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

//EXERCISE 4
//filter array using one line of code
//==============lines 38 to 53 are me trying to understand this exercise================
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

//====MY ANSWER TO EXERCISE 4=============
var filteredArray = anArray.filter( (value,index,array) => callback(value) );

