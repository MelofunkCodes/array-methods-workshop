//EXERCISE 1
//using forEach to print only positive numbers of an array
function printPositives (value) {
    if(value > 0) {
        console.log(value);
    }
}

var a = [ -3, 0.999, -88, 7.2];

console.log("EXERCISE 1: \n");
a.forEach(printPositives);

//EXERCISE 2
//use filter method to return a new array with only positive numbers
function getPositives (value) {
    if(value > 0) {
        return value;
    }
}

var aFiltered;

aFiltered = a.filter(getPositives);

console.log("\nEXERCISE 2: ");
console.log("Original array: ", a);
console.log("Filtered array: ", aFiltered);

//EXERCISE 3
//re-do exercise 1. Filter the array. then print out numbers from filtered array
console.log("\nEXERCISE 3: ");
return a.filter(getPositives).forEach(printPositives);