 // types of function

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
// async function asyncFunction() {
//     return "This is an async function";
// }

// asyncFunction().then(result => {
//     console.log(result); // "This is an async function"
// }).catch(error => {
//     console.error("Error:", error);
// });


// 8. higher-order function
// A function that takes another function as an argument or returns a function as its result
// function higherOrderFunction(callback) {
//     console.log("This is a higher-order function");
//     callback();
// }
// higherOrderFunction(function() {
//     console.log("This is a callback function inside higher-order function");
// });


// 9. pure function
// A function that always produces the same output for the same input and has no side effects
// function pureFunction(x) {
//     return x * 2;
// }
// console.log(pureFunction(5)); // 10
// console.log(pureFunction(5)); // 10 (same input, same output)
// console.log(pureFunction(10)); // 20 (different input, different output)
// console.log(pureFunction(10)); // 20 (same input, same output)


// 10. recursive function
// A function that calls itself to solve a problem, often used for tasks like calculating factorials
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);           
//     }
// }

// console.log(factorial(0)); // 1 (0! = 1)
// console.log(factorial(1)); // 1 (1! = 1)
// console.log(factorial(5)); // 120 (5! = 5 * 4 * 3 * 2 * 1)


// factorial(5)
// = 5 * factorial(4)
// = 5 * (4 * factorial(3))
// = 5 * (4 * (3 * factorial(2)))
// = 5 * (4 * (3 * (2 * factorial(1))))
// = 5 * (4 * (3 * (2 * (1 * factorial(0)))))
// = 5 * 4 * 3 * 2 * 1 * 1
// = 120


// 11. method
// A function that is a property of an object, allowing for object-oriented programming 
// const obj = {
//     name: "John",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// obj.greet(); // "Hello, my name is John"
// const obj1 = {
//     name: "John",
//     greet: () =>{
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// obj1.greet();  // "Hello, my name is undefined" (arrow functions do not have their own 'this')


// 12. constructor function
// A function used to create objects, typically with the 'new' keyword, allowing for object-oriented programming
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     };
// }    

// const person1 = new Person("Alice", 30);
// person1.greet(); // "Hello, my name is Alice and I am 30 years old"
// const person2 = new Person("Bob", 25);
// person2.greet(); // "Hello, my name is Bob and I am 25 years old"


// 13. constructor function with arrow function
// A constructor function that uses an arrow function for a method, which does not bind its own
// function Person(name, age) {
//     this.name = name;    
//     this.age = age;
//     this.greet = () => {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     };
// }
// const person1 = new Person("Alice", 30);
// person1.greet(); // "Hello, my name is Alice and I am 30 years
// const person3 = new Person("Charlie", 35);
// person3.greet(); // "Hello, my name is Charlie and I am 35 years old"
// const person4 = new Person("David", 28);
// person4.greet(); // "Hello, my name is David and I am 28 years old"


// Q=1=>) write a regular function that takes a string and returns it with the first letter capitalized
// function capitalizeFirstLetter(str) {
//     console.log(str.charAt(0).toUpperCase() + str.slice(1))
// }
// capitalizeFirstLetter("tanveer"); // "Tanveer"


// Q=2=>) show an alert message that say "plese login" after 5 seconds on your browser
// setTimeout(()=>{
//     console.log("Please login");
// },5000);


// Q=3=>) make an arrow function that takes a price and a discount and returns the final price after applying the discount
// const calculateFinalPrice = (price, discount) => {
//   let dixcountPrice = price - (price * discount / 100)
//   return dixcountPrice;
// }
// const finalPrice = calculateFinalPrice(1000, 10)
// console.log(`The final price after discount is: ${finalPrice}`);



// Q=4=>) create a function that builds a username from a full name.
// function buildUsername(fullName) {
//     const parts = fullName.split(" ");
//     const username = parts[0].toLowerCase() + parts[1].toLowerCase().charAt(0);
//     return username;
// }
// const username = buildUsername("Tanveer Ahmed");
// console.log(`Your username is: ${username}`); // "tanveera"



// Q=5=>) write a function that takes a traffic light color and gives the correct instruction (eg "go" for green "stop" for red "caution" for yellow and "invalid" for any other color)


// function trafficLightInstruction(color) {
//   let color;
//   if(color === "green"){
//     console.log("Go");
//   }
//   else if(color === "red"){
//     console.log("Stop");
//   }
//     else if(color === "yellow"){
//         console.log("Caution");
//     }
//     else{
//         console.log("Invalid color");
//     }
// }
// trafficLightInstruction("green"); // "Go"
// trafficLightInstruction("red"); // "Stop"
// trafficLightInstruction("yellow"); // "Caution"
// trafficLightInstruction("blue"); // "Invalid color"
