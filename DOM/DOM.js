/*
What is DOM?

DOM stands for Document Object Model. It is a programming interface provided by browsers for HTML and XML documents. The DOM represents the page so that programs can change the document structure, style, and content dynamically.

Key Points:
- The DOM treats an HTML or XML document as a tree structure where each node is an object representing a part of the document (such as elements, attributes, and text).
- JavaScript can interact with the DOM to manipulate web pages in real-time.

Types of DOM:

1. Legacy DOM (Level 0):
    - Early, browser-specific implementations.
    - Limited to basic document and form element access.

2. DOM Level 1:
    - Standardized by W3C.
    - Introduced a structured way to access and manipulate document elements.

3. DOM Level 2:
    - Added support for events, ranges, traversal, and CSS manipulation.

4. DOM Level 3:
    - Enhanced support for XPath, keyboard events, and content loading.

Modern browsers implement the latest DOM standards, allowing rich and interactive web applications.
*/

// Selecting HTML elements using JavaScript

// By ID
// const elementById = document.getElementById('myElementId');

// By class name (returns a collection)
// const elementsByClass = document.getElementsByClassName('myClassName');

// By tag name (returns a collection)
// const elementsByTag = document.getElementsByTagName('div');

// Using querySelector
// const Element = document.querySelector('h1');

// Using querySelector (returns the first matching element)
// const firstElement = document.querySelector('.myClassName');

// Using querySelectorAll (returns a NodeList of all matching elements)
// const allElements = document.querySelectorAll('div.myClassName');

// Manipulating HTML content and attributes

// Changing the text content of an element
// elementById.textContent = 'New text content';

// Changing the HTML content of an element
// elementById.innerHTML = '<span>New HTML content</span>';

// Changing an attribute (e.g., src for images, href for links)
// elementById.setAttribute('attributeName', 'newValue');

// Changing the style of an element
// elementById.style.color = 'red';
// elementById.style.backgroundColor = 'yellow';

// Adding a class to an element
// elementById.classList.add('newClass');

// Removing a class from an element
// elementById.classList.remove('oldClass');

// Toggling a class on an element
// elementById.classList.toggle('active');

// Removing an element from the DOM
// elementById.remove();

// Creating a new element and appending it to the DOM
// const newDiv = document.createElement('div');
// newDiv.textContent = 'I am a new div!';
// document.body.appendChild(newDiv);

// Event Listeners in JavaScript

// An event listener is a procedure in JavaScript that waits for an event to occur, such as a user clicking a button, hovering over an element, or pressing a key.

// Adding an event listener to an element
// Syntax: element.addEventListener('event', callbackFunction);

// Example: Listening for a click event on a button
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     alert('Button was clicked!');
// });

// You can also use arrow functions
// button.addEventListener('click', () => {
//     console.log('Button clicked!');
// });

// Removing an event listener
// function handleClick() {
//     console.log('Button clicked!');
// }
// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

// Common events include: 'click', 'mouseover', 'mouseout', 'keydown', 'keyup', 'submit', etc.

// Event object
// The callback function receives an event object with information about the event
// button.addEventListener('click', function(event) {
//     console.log(event.target); // The element that was clicked
// });

// Event delegation: Attach a single event listener to a parent element to handle events for multiple child elements
// document.body.addEventListener('click', function(event) {
//     if (event.target.matches('.dynamicButton')) {
//         console.log('A dynamic button was clicked!');
//     }
// });

// EXAMPLES===========================================
// let a = document.querySelector("h1");
// a.innerHTML = "my name is tanveer alam";
// let b = document.querySelector("p");
// b.innerHTML = "my name is tanveer alam";


// let a = document.querySelector("h1")
// a.addEventListener("click", ()=>{
//    a.style.backgroundColor = "red"
//    a.style.fontSize ="60px"
// })


// let box = document.querySelector("div")
// let button1 = document.querySelector(".button1")
// let button2 = document.querySelector(".button2")

// button1.addEventListener("click",()=>{
//     box.style.scale = "1"
//     box.style.backgroundColor = "yellow"
// })
// button2.addEventListener("click",()=>{
//     box.style.scale = "0.5"
//     box.style.backgroundColor = "red"
// })


