/**
 * Represents an array, which is a data structure used to store multiple values in a single variable.
 * Arrays can hold elements of any type, such as numbers, strings, objects, or even other arrays.
 *
 * There are several types of arrays in JavaScript:
 * - Homogeneous arrays: All elements are of the same type (e.g., all numbers).
 * - Heterogeneous arrays: Elements can be of different types (e.g., numbers, strings, objects).
 * - Multidimensional arrays: Arrays that contain other arrays as elements, forming a matrix or grid.
 *
 * Arrays are zero-indexed, meaning the first element is accessed with index 0.
 * Common operations include adding, removing, and iterating over elements.
 *
 * @typedef {Array} Array
 * @template T
 * @property {number} length - The number of elements in the array.
 * @example
 */

// const numbers = [1, 2, 3]; // Homogeneous array of numbers
// const mixed = [1, "two", { three: 3 }]; // Heterogeneous array
// const matrix = [
//   [1, 2],
//   [3, 4],
// ]; // Multidimensional array
// console.log(numbers + "\n" + mixed + "\n" + matrix);

// constructor array
// const arr = new Array(5 , 9 ,"tanvver");
// console.log(arr)

// let arr = [20];
// let arr1 = new Array(20).fill(0);
// console.log(arr + "\n" + arr1);

// console.log(typeof(arr));

/**
 * Arrays in JavaScript are mutable, meaning their elements can be changed after the array is created.
 * You can modify, add, or remove elements from an array.
 * Example:
 */
// let mutableArray = [1, 2, 3];
// mutableArray[0] = 10; // Modify element
// mutableArray.push(4); // Add element
// mutableArray.pop();   // Remove last element
// console.log(mutableArray); // Output: [10, 2, 3]

// use "of" and "in"
// const arr = ["tanveer", 535, "alam" ,37]
// for(let val of arr){
//     console.log(val)
// }
// const arr = ["tanveer", 535, "alam" ,37]
// for(let val in arr){
//     console.log(val)
// }

// push
// let arr = [1, 2, 3];
// let a = arr.push(444); // Adds 444 to the end of the array
// console.log(arr); // Output: [1, 2, 3, 444]
// console.log(a); // Output: 4 (new length of the array)
// console.log(arr, a) // Output: [1, 2, 3, 444] 4

// pop
// let arr = [1, 2, 3, 44];
// let b = arr.pop(); // Removes the last element (44) from the array
// console.log(arr); // Output: [1, 2, 3]
// console.log(b); // Output: 44 (the removed element)
// console.log(arr, b) // Output: [1, 2, 3] 44

// shift
// let arr = [1, 2, 3, 44];
// let c = arr.shift(); // Removes the first element (1) from the array
// console.log(arr); // Output: [2, 3, 44]
// console.log(c); // Output: 1 (the removed element)
// console.log(arr, c) // Output: [2, 3, 44] 1

// unshift
// let arr = [1, 2, 3, 44];
// let d = arr.unshift(0); // Adds 0 to the beginning of the array
// console.log(arr); // Output: [0, 1, 2, 3, 44]
// console.log(d); // Output: 5 (new length of the array)
// console.log(arr, d) // Output: [0, 1, 2, 3, 44] 5

// splice
// let arr = [1, 2, 3, 44];
// let a = arr.splice(1, 2, 5, 6); // Removes 2 elements starting from index 1 and adds 5 and 6
// console.log(arr); // Output: [1, 5, 6, 44]
// console.log(a); // Output: [2, 3] (the removed elements)
// console.log(arr, a) // Output: [1, 5, 6, 44] [2, 3]

// slice
// let arr = [1, 2, 3, 44];
// let a = arr.slice(1, 3); // Extracts elements from index 1 to 2 (not including index 3)
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: [2, 3] (the extracted elements)
// console.log(arr, a) // Output: [1, 2, 3, 44] [2, 3]

// concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let a = arr1.concat(arr2); // Combines arr1 and arr2 into a new array
// console.log(arr1); // Output: [1, 2, 3]
// console.log(arr2); // Output: [4, 5, 6]
// console.log(a); // Output: [1, 2, 3, 4, 5, 6]
// console.log(arr1, arr2, a) // Output: [1, 2, 3] [4, 5, 6] [1, 2, 3, 4, 5, 6]

// spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let a = [...arr1, ...arr2]; // Combines arr1 and arr2 using the spread operator
// console.log(arr1); // Output: [1, 2, 3]
// console.log(arr2); // Output: [4, 5, 6]
// console.log(a); // Output: [1, 2, 3, 4, 5, 6]
// console.log(arr1, arr2, a) // Output: [1, 2, 3] [4, 5, 6] [1, 2, 3, 4, 5, 6]

// join
// let arr = [1, 2, 3, 44];
// let a = arr.join(", "); // Joins the elements of the array into a string with ", " as the separator
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: "1, 2, 3, 44"
// console.log(arr, a) // Output: [1, 2, 3, 44] "1, 2, 3, 44"

// includes
// let arr = [1, 2, 3, 44];
// let a = arr.includes(2); // Checks if the array includes the element 2
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: true (2 is in the array)
// console.log(arr, a) // Output: [1, 2, 3, 44] true
// let b = arr.includes(5); // Checks if the array includes the element 5
// console.log(b); // Output: false (5 is not in the array)
// console.log(arr, b) // Output: [1, 2, 3, 44] false

// toString
// let arr = [1, 2, 3, 44];
// let a = arr.toString(); // Converts the array to a string
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: "1,2,3,44" (elements joined by commas)
// console.log(arr, a) // Output: [1, 2, 3, 44] "1,2,3,44"

// indexOf
// let arr = [1, 2, 3, 44];
// let a = arr.indexOf(2); // Finds the index of the element 2 in the array
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: 1 (index of 2)
// console.log(arr, a) // Output: [1, 2, 3, 44] 1
// let b = arr.indexOf(5); // Finds the index of the element 5
// console.log(b); // Output: -1 (5 is not in the array)
// console.log(arr, b) // Output: [1, 2, 3, 44] -1

// reverse
// let arr = [1, 2, 3, 44];
// let a = arr.reverse(); // Reverses the order of the elements in the array
// console.log(arr); // Output: [44, 3, 2, 1]
// console.log(a); // Output: [44, 3, 2, 1]
// console.log(arr, a) // Output: [44, 3, 2, 1] [44, 3, 2, 1]

// sort
// let arr = [3, 1, 4, 2];
// let a = arr.sort(); // Sorts the array in ascending order
// console.log(arr); // Output: [1, 2, 3, 4]
// console.log(a); // Output: [1, 2, 3, 4]
// console.log(arr, a) // Output: [1, 2, 3, 4] [1, 2, 3, 4]

// let arr = [3, 10, 4, 2];
// let a = arr.sort(); // Sorts the array in ascending order
// console.log(arr); // Output: [10, 2, 3, 4]
// console.log(a); // Output: [10, 2, 3, 4]
// console.log(arr, a) // Output: [10, 2, 3, 4] [10, 2, 3, 4]

// let arr = [3, 10, 4, 2];
// let b = arr.sort((a, b) => a - b); // Sorts the array in ascending order using a custom comparator
// console.log(arr); // Output: [2, 3, 4, 10] ]
// console.log(b); // Output: [2, 3, 4, 10]
// console.log(arr, b) // Output: [2, 3, 4, 10] [2, 3, 4, 10]

// let arr = [3, 1, 4, 2];
// let c = arr.sort((a, b) => b - a); // Sorts the array in descending order using a custom comparator
// console.log(arr); // Output: [4, 3, 2, 1]
// console.log(c); // Output: [4, 3, 2, 1]
// console.log(arr, c) // Output: [4, 3, 2, 1] [4, 3, 2, 1]

// find
// let arr = [1, 2, 3, 44];
// let a = arr.find((element) => element > 2); // Finds the first element greater than 2
// console.log(arr); // Output: [1, 2, 3, 44]
// console.log(a); // Output: 3 (the first element greater than 2)
// console.log(arr, a) // Output: [1, 2, 3, 44] 3
// let b = arr.find((element) => element > 50); // Finds the first element greater than 50
// console.log(b); // Output: undefined (no element greater than 50)
// console.log(arr, b) // Output: [1, 2, 3, 44] undefined

// flat
// let arr = [1, 2, [3, 4], [5, [6, 7]]];
// let a = arr.flat(); // Flattens the array by one level
// console.log(arr); // Output: [1, 2, [3, 4], [5, [6, 7]]]
// console.log(a); // Output: [1, 2, 3, 4, 5, [6, 7]] (one level flattened)
// let b = arr.flat(2); // Flattens the array by two levels
// console.log(b); // Output: [1, 2, 3, 4, 5, 6, 7] (two levels flattened)
// let arr = [1, 2, [3, 4], [5, [6, 7]]];
// let c = arr.flat(Infinity); // Flattens the array completely
// console.log(c); // Output: [1, 2, 3, 4, 5, 6, 7] (completely flattened)
// console.log(arr, c) // Output: [1, 2, [3, 4], [5, [6, 7]]] [1, 2, 3, 4, 5, 6, 7]

// map
// let arr = [4, 3, 9, 1];
// let a = arr.map((Element)=>{
//     console.log(Element)
//     return Element * 5;
// })
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(a); // Output: [20, 15, 45, 5]

// let arr = [4, 3, 9, 1];
// let a = arr.map((Element, index) => {
//     console.log(Element, index);
//     return Element * 5;
// });
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(a); // Output: [20, 15, 45, 5]

// let arr = [4, 3, 9, 1];
// let b = arr.map((Element, index, array) => {
//     console.log(Element, index, array);
//     return Element * 5;
// });
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(b); // Output: [20, 15, 45, 5]

// filter
// let arr = [4, 3, 9, 1];
// let a = arr.filter((Element) => Element > 3); // Filters elements greater than 3
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(a); // Output: [4, 9] (elements greater than 3)

// let arr = [4, 3, 9, 1];
// let b = arr.filter((Element, index) => {
//     console.log(Element, index);
//     return Element > 3; // Filters elements greater than 3
// });
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(b); // Output: [4, 9] (elements greater than 3)

// let arr = [4, 3, 9, 1];
// let c = arr.filter((Element, index, array) => {
//     console.log(Element, index, array);
//     return Element > 3; // Filters elements greater than 3
// });
// console.log(arr); // Output: [4, 3, 9, 1]
// console.log(c); // Output: [4, 9] (elements greater than 3)

// reduce
// let arr = [1, 2, 3, 4];
// let a = arr.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue; // Sums all elements
// }, 0); // Initial value is 0
// console.log(arr); // Output: [1, 2, 3, 4]
// console.log(a); // Output: 10 (sum of all elements)

// let arr = [1, 2, 3, 4];
// let b = arr.reduce((accumulator, currentValue, index) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue; // Sums all elements
// }, 10); // Initial value is 0
// console.log(arr); // Output: [1, 2, 3, 4]
// console.log(b); // Output: 20 (sum of all elements + initial value)

// forEach
// let arr = [1, 2, 3, 4];
// arr.forEach((element, index) => {
//     console.log(element, index); // Logs each element and its index
// });
// Output:
// 1 0
// 2 1
// 3 2
// 4 3
// Note: forEach does not return a new array, it simply iterates over the elements
// and performs the specified action on each element.
// console.log(arr); // Output: [1, 2, 3, 4] (original array remains unchanged)
// console.log(arr.forEach((element, index) => {
//     console.log(element, index);
// })); // Output: undefined (forEach does not return a value)

// let arr = [1, 2, 3, 4];
// arr.forEach((element, index) => {
//     console.log(element, index);
//     console.log(element + index) // Logs each element and its index
// });

// fill
// let arr = [1, 2, 3, 4];
// let a = arr.fill(0); // Fills the entire array with 0
// console.log(arr); // Output: [0, 0, 0, 0]
// console.log(a); // Output: [0, 0, 0, 0]

// let arr = [1, 2, 3, 4];
// let b = arr.fill(0, 1, 3); // Fills elements from index 1 to 2 with 0
// console.log(arr); // Output: [1, 0, 0, 4]
// console.log(b); // Output: [1, 0, 0, 4]

// let arr = [1, 2, 3, 4];
// let c = arr.fill(0, 1); // Fills elements from index 1 to the end with 0
// console.log(arr); // Output: [1, 0, 0, 0]
// console.log(c); // Output: [1, 0, 0, 0]

// Q=1=>) for an array with marks of students find the average marks of the entire class
// let marks = [85, 90, 78, 92, 88];
// let totalMarks = marks.reduce((acc, index) => {
//   return acc + index;
// });
// console.log(totalMarks);
// console.log("avarage is", totalMarks / marks.length);

// Q=2=>) create an array with the given length(n) and fill with 0
// let arr = 25
// let a = new Array(25).fill(0)
// console.log(a)

// let arr = [2, 2, 1, "tanveer", 4]
// let a = arr.fill(0)
// console.log(arr)
// console.log(a)

// Q=3=>) create an array with the given length (n) and store natural number from 1 to n
// let a = new Array(25).fill(0)
// a.forEach((item,index)=>{
//     a[index] = index + 1;
// })
// console.log(a)

// Q=4=>) consider an array of mcu heros ([ironman, captain, black widow, wanda, hulk, black panther])
// a) add spiderman at the end and thor at the start
// b) remove black widow and add howkeye in its place
// c) check whether captain is present in the array

// solve (a)--------
// let arr = [
//   "ironman",
//   "captain",
//   "black widow",
//   "wanda",
//   "hulk",
//   "black panther",
// ];
// arr.push("spiderman");
// arr.unshift("thor");
// console.log(arr);

// solve (b)--------
// let arr = [
//   "ironman",
//   "captain",
//   "black widow",
//   "wanda",
//   "hulk",
//   "black panther",
// ];
// arr.splice(2, 1, "hawkeye");
// console.log(arr);

// solve (c)----------
//  let arr = [
//   "ironman",
//   "captain",
//   "black widow",
//   "wanda",
//   "hulk",
//   "black panther",
// ];
// console.log(arr.includes("captain"));

// Q=5=>) how to check if given thing is array or not
// let arr1 = "tanveer";
// let arr2 = ["tanveer"];
// let a = Array.isArray(arr1)
// let b = Array.isArray(arr2)
// console.log(a)
// console.log(b)

// Q=6=>) how to convert others datatypes to array
// let arr = "tanveer Alam"
// let a = Array.from(arr)
// console.log(a)
// let arr1 = 2
// let b = Array.from(arr1)
// console.log(b)
// let arr2 = {}
// let c = Array.from(arr2)
// console.log(c)

// Q=7=>) we have three variables a, b, c, d , a contains any number ,b contain any string ,c contain any object, d contain any array. can we create an array from all these four variables? if yes how

// let a = 24
// let b = "Tanveer"
// let c = {
//     name :"tanveer"
// }
// let d = ["tanveer", 24]
// let e = Array.of(a,b,c,d);
// console.log(e)

// let a = prompt("Enter a plaindrome word");
// let b = a.split("").reverse().join("");
// if (a === b) {
//   alert("This is plaindrome word");
// } else {
//   alert("This is not a plaindrome word");
// }

// Q=8=> convert all word first letter in capital in entaire string
// let arr = "tanveer alam ansari"
// let a = arr.split(" ").map((item, index)=>{
//    return item.charAt(0).toUpperCase() + item.slice(1)
// })
// let b = a.join(" ");
// console.log(b)


