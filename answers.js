//EXERCISE 1
//using forEach to print only positive numbers of an array
function printPositives (value) {
    if(value > 0) {
        console.log(value);
    }
}

var a = [ -3, 0.999, -88, 7.2];

a.forEach(printPositives);