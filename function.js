 // 5 types of function

 // 1. function declaration
 //These are the classic way to define functions.

//  function alpha(){
//     console.log("this is normal function")
//  }
//  alpha()
 

// 2. function expression
// A function assigned to a variable.

//  const beta = function(){
//     console.log("this is function expression")
//  }
//  beta()      



// 3. arrow function
// A more concise syntax for writing functions introduced in ES6.

//  const gamma = () => {
//     console.log("this is arrow function")
//  }
//  gamma()


// 4. IIFE (Immediately Invoked Function Expression)
// A function that runs as soon as it is defined.
//  (function(){
//     console.log("this is IIFE")
//  })()

// 5. callback function
// A function passed into another function as an argument, which is then invoked inside the outer function
//  function delta(callback){
//     console.log("this is callback function")
//     callback()
//  }

//  delta(function(){
//     console.log("this is callback function inside delta")    
//  })

// 6. generator function
// A special type of function that can be paused and resumed, allowing it to yield multiple values
// function* generatorFunction() {
//     yield "first value";
//     yield "second value";
//     yield "third value";
// }

// const gen = generatorFunction();
// console.log(gen.next().value); // "first value"
// console.log(gen.next().value); // "second value"
// console.log(gen.next().value); // "third value"
// console.log(gen.next().value); // undefined (no more values to yield)


// 7. async function
// A function that operates asynchronously using the async/await syntax, allowing for non-blocking code
async function asyncFunction() {
    return "This is an async function";
}

asyncFunction().then(result => {
    console.log(result); // "This is an async function"
}).catch(error => {
    console.error("Error:", error);
});
