//This function takes two numeric arguments and returns the sum
function add(a, b) {
    return a + b;
}

if (add(2, 3) !=5) throw error("addition tailed test #1")
if (add(8, -4) !=4) throw error("addition failed test #2")
if (add(397, 0) !=397) throw error("addition failed test #3")    

//This function takes two numeric arguments and returns the difference
function subtract(a, b) {
    return a - b;
}

if (subtract(7, 3) !=4) throw error("subtraction failed test #1")
if (subtract(-4, 2) !=-6) throw error("subtraction failed test #2")
if (subtract(213, 0) !=213) throw error("subtraction failed test #3")


//This function takes two numeric arguments and returns the product
function multiply(a, b) {
    return a * b;
}

if (multiply(4, 2) !=8) throw error("multipliaction failed test #1")
if (multiply(10, -1) !=-10) throw error("multiplication failed test #2")
if (multiply(187, 0) !=0) throw error("multiplication failed test #3")


//This function takes two numeric arguments and returns the quotient
function divide(a, b) {
    return a / b;
}

if (divide(10, 5) !=2) throw error("division failed test #1")
if (divide(-25, 5) !=-5) throw error("division failed test #2")
if (divide(0, 17) !=0) throw error("division failed test #3")

//This function takes a string and prints the greeting
function printHello(name) {
    console.log('Hello ' + name)
}

console.log(add(4,6)); // 10
console.log(subtract(7,3)); // 4
console.log(multiply(8,2)); // 16
console.log(divide(6,2)); // 3
printHello('name')
