// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.


let array = [28, 43, -12, 30, 4, 0, 12];

let value = false;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {  // the reason (let j = i + 1) is because we want j to be the next value in the array after i. so dont just set j = 1, set it equal to the value right after i.
        if (array[i] + array[j] === 0) {
            value = true;
            break; // break; stops the current for loop
        }
    }
}
console.log(value);



// first function, many ways to write them
function func_name(name_input, fav_number) {
    let return_string = `your name is ${name_input}, and your fav number is ${fav_number}`
    return return_string
}
let sentence = func_name("Quinten", 19)
console.log(sentence);




// calling an adding numbers function
function add_numbers(num1, num2) {
    return num1 + num2
}
console.log(add_numbers(2,2));




// function expression, assigning a function to a variable
let square = function(x) {
    return x * x;
}
console.log(square(10));



//function expressions can also be used as arguments to other functions
console.log([3, 2, 1].sort (function(a, b) {return a - b; }));



// arrow functions, no need for a function name since arrow functions are expressions not statements
let sum = (x, y) => {
    return x + y;
}



let o = {                                   // object o
    m: function() {                         // method m of the object o
        console.log(this === o);
        f();                                // now we call the helper function f()
        function f() {
            console.log(this === o);
        }
    }
}
o.m();                                      //invoke the method m on the object o