/*
What is an Object in JavaScript?
---------------------------------
An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Objects are used to store and organize data.

Types of Objects in JavaScript:
-------------------------------
1. Built-in Objects: Provided by JavaScript (e.g., Object, Array, Date, Math, String, Number, Boolean, RegExp, Function, etc.)
2. User-defined Objects: Created by developers using object literals, constructors, or classes.

Examples:
---------
*/
// 1. Object Literal
// const person = {
//     name: "Alice",
//     age: 25,
//     greet: function() {
//         console.log("Hello!");
//     }
// };
// console.log(person);
// console.log(person.name); // Outputs: Alice
// person.greet(); // Outputs: Hello!
// console.log(person.greet()); // Outputs: undefined (since greet() does not return anything)

// 2. Using the Object Constructor
// const car = new Object();
// car.brand = "Toyota";
// car.model = "Corolla";
// console.log(car)

// const fruit = new Object({
//     name: "Apple",
//     color: "Red",
//     weight: 150,
// })
// console.log(fruit); // Outputs: { name: 'Apple', color: 'Red', weight: 150 }
// fruit.taste = "Sweet";
// console.log(fruit); // Outputs: { name: 'Apple', color: 'Red', weight: 150, taste: 'Sweet' }

// how to delete a property from an object
// const person = {
//     name: "Alice",
//     age: 25,
//     dob : 2023
// };
// console.log(person)
// delete person.dob; // Deletes the 'dob' property
// console.log(person); // Outputs: { name: 'Alice', age: 25 }

// some errors with objects
// const person = {
//     name: "Alice",
//     age: 25,
//     greet: function() {
//         console.log(name);
//     }
// };
// person.greet(); // Outputs is error: Uncaught ReferenceError: name is not defined
// The error occurs because 'name' is not defined in the scope of the greet function.

// To fix this, we can use 'this' to refer to the current object:
// const personFixed = {
//     name: "Alice",
//     age: 25,
//     greet: function() {
//         console.log(this.name); // Outputs: Alice
//     }
// };
// personFixed.greet(); // Outputs: Alice

// const person = {
//     name: "Alice",
//     age: 25,
//     greet: ()=> {
//         console.log(name);
//     }
// };
// person.greet(); // Outputs: error: Uncaught ReferenceError: name is not defined

// const person = {
//     name: "Alice",
//     age: 25,
//     greet: ()=> {
//         console.log(this.name);
//     }
// };
// person.greet(); // Outputs: undefined

// how to access keys and values of an object
// const person = {
//     name: "Alice",
//     age: 25,
// }
// let a = Object.keys(person)
// console.log(a); // Outputs: ['name', 'age']
// let b = Object.values(person)
// console.log(b); // Outputs: ['Alice', 25]



// entries
// const person = {
//     name: "Alice",
//     age: 25,
//     }
// let entrie = Object.entries(person);
// console.log(entrie); // Outputs: [['name', 'Alice'], ['age', 25]]

// assign
// const person = {
//     name: "Alice",
//     age: 25,
// }
// const person2 = {}
// let a = Object.assign(person2,person)
// console.log(a)
// --------------------OR-------------------
// const person = {
//     name: "Alice",
//     age: 25,
// }
// const person2 = {
//     ...person
// }
// console.log(person2)

// freez
// const person = {
//     name: "Alice",
//     age: 25,
// }
// let a = Object.freeze(person)
// person.dob = 222
// delete person.name
// console.log(person)
// console.log(a)
// person.name = "tanveer"   // when we use freez method then we dont update ,delete and change any value in object
// console.log(a)

// seal
// const person = {
//     name: "Alice",
//     age: 25,
// }
// let a = Object.seal(person)
// person.dob = 222
// console.log(a)
// delete person.name
// console.log(a)
// person.name = "Tanveer";   // when we use seal method we dont add and delete any value but we can update the value in object
// console.log(a)

// hasOwnProperties
// const person = {
//     name: "Alice",
//     age: 25,
// }
// let a = person.hasOwnProperty("name")
// console.log(a)
// let b = person.hasOwnProperty("age")
// console.log(b)
// let c = person.hasOwnProperty("Alice")
// console.log(c)

// destructuring in objects
//  let obj = {
//     name : "Tanveer",
//     age : 23
//  }
//  let { name , age } = obj;
//  console.log(name, age)

// Array Destructuring
// let arr = ["tanveer", 23, "india"];
// let [name, age, country] = arr;
// console.log(name, age, country); // Outputs: tanveer 23 india

// Q=1=> create a object with properties name,age and city then
//  (a) log each property as value of name property is Tanveer using loop
// let person = {
//   name: "Tanveer",
//   age: 23,
//   city: "India",
// };
// for (let val in person) {
//   console.log(val + " : " + person[val]);
// }

// (b) add a new property called email to the person object
// let person = {
//   name: "Tanveer",
//   age: 23,
//   city: "India",
// };
// person.email = "tan@gmail.com"
// console.log(person); // Outputs: { name: 'Tanveer', age: 23, city: 'India', email: '

// (c) delete the age property from the person object
// let person = {
//   name: "Tanveer",
//   age: 23,
//   city: "India",
// };
// delete person.age;
// console.log(person); // Outputs: { name: 'Tanveer', city: 'India' }

// Q=2=> create a function that takes an object with firstName, middleName, and lastName properties and returns the full name
// function getFullName(obj) {
//   return `${obj.firstName} ${obj.middleName} ${obj.lastName}`;
// }
// let person = {
//   firstName: "Tanveer",
//   middleName: "Alam",
//   lastName: "Ansari",
// };
// console.log(getFullName(person)); // Outputs: Tanveer Khan Ansari

// Q=3=> create a function that takes an object and return the number of properties in the object
// function countProperties(obj) {
//   return Object.keys(obj).length;
// }
// let person = {
//   name: "Tanveer",
//   age: 23,
//   city: "India",
// };
// console.log(countProperties(person)); // Outputs: 3

// Q=4=> write a function that returns an array of names of users who have the role of "admin"
// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "David", role: "user" },
// ];
// function filterArray(users) {
//   let a = users.filter((item) => {
//     return item.role === "admin";
//   });
//   let finalResult = a.map((item) => {
//     return item.name;
//   });
//   return finalResult;
// }
// let result = filterArray(users);
// console.log(result);



//Q=5=>) write a function searchProduct(products, searchTerm) that retuns an array of products whose name includes the given keyword (case insensitive
// let obj = [
//     {id: 1, name: "Apple", price: 100},
//     {id: 2, name: "Banana", price: 50},
//     {id: 3, name: "Orange", price: 80},
//     {id: 4, name: "Mango", price: 120},
//     {id: 5, name: "Pineapple", price: 150}  
// ]
// function searchProduct(products, searchKeyword) {
//     return products.filter(product =>
//         product.name.toLowerCase().includes(searchKeyword.toLowerCase())
//     );
// }

// console.log(searchProduct(obj, "g")); // Example: will match Banana, Mango, Orange



// Q=6=> write a function groupBYPost(comments) that returns an object grouping comments by postId
// let comments = [
//     { postId: 1, name: "Great post!" },
//     { postId: 2, name: "Thanks for sharing!" },
//     { postId: 1, name: "Very informative." },
//     { postId: 3, name: "I learned a lot." },
//     { postId: 2, name: "Interesting perspective." }
// ];
// function groupByPost(comm) {
//     return comm.reduce((acc, comment) => {
//         if (!acc[comment.postId]) {  
//             acc[comment.postId] = [];
//         }
//         acc[comment.postId].push(comment.name);
//         return acc;
//     }, {});
// }
// console.log(groupByPost(comments));  



// Q=7=> write a function buildQuery(params) that returns a query string from an object
// let params = {
//     search: "laptop",
//     category: "electronics",
//     sort: "price",
//     order: "asc"
// };
// function buildQuery(params) {
//     return Object.entries(params)
//         .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
//         .join("&");  
// }
// console.log(buildQuery(params)); // Outputs: search=laptop&category=electronics&sort=price&order=asc

