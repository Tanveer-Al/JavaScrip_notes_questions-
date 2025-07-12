// let a = document.getElementsByTagName("h1")
// console.log(a)

// let b = document.getElementById("tag")
// console.log(b)

// let c= document.getElementsByClassName("box")
// console.log(c)

// let d = document.querySelector("h1")  // select tag
// console.log(d)

// let e = document.querySelector(".box") // select class
// console.log(e)

// let f = document.querySelector("#tag") // select id
// console.log(f)

// let g = document.querySelectorAll("h1")   //select all id or class or tagName
// console.log(g)

// manipulating the HTML
// let h1 = document.querySelector("h1")
// console.log(h1.innerText)
// console.log(h1.textContent)

// inserting elements
// let body = document.querySelector("body")
// let a = document.createElement("p")
// a.innerHTML = "my name is tanveer alam";
// body.append(a) // last in the element or tag
// body.prepend(a)  // top in the element or tag
// body.after(a)  // add after the element or tag
// body.before(a)  //add nefore the element or tag
// body.insertAdjacentElement("afterbegin", a)
// body.insertAdjacentElement("afterend", a)
// body.insertAdjacentElement("beforebegin", a)
// body.insertAdjacentElement("beforeend", a)

// how to delete element or tag
// let body = document.querySelector("body")
// console.log(body.children[3])
// let dele = body.children[3]
// dele.remove()

// when you work on child tag then how to work on parent tag
// let body = document.querySelector("body")

// let h1 = document.querySelector("h1")
// h1.style.backgroundColor = "yellow"

// let parentNode = h1.parentNode
// console.log(parentNode)

// let newEle = document.createElement("div")
// newEle.innerHTML = "My name is Tanveer Alam"

// parentNode.replaceChild(newEle , h1)

// how to get attributes
// let a = document.querySelector("h2")
// console.log(a.attributes)
// let classVal = a.getAttribute("class")
// console.log(classVal)
// // a.setAttribute("class", "random") // if in html have already class then javascript change the class
// a.setAttribute("class", `${classVal} random`)
// console.log(a)

// Q=1=> craete a paragraph with text "My name is tanveer alam" and add background color to black and font color to white using javascript
// let newPara = document.createElement("p");
// newPara.innerText = "My name is Tanveer alam";
// newPara.setAttribute("style", "background-color: black; color: white");
// let body = document.querySelector("body")
// body.append(newPara)

// // craete a button bottom of paragraph
// let button = document.createElement("button")
// button.innerHTML = "click me"
// button.setAttribute("style", "height: 40px; width: 100px")
// let para = document.querySelector("p")
// para.after(button)

// // change and add class
// let box = document.querySelector(".box1")
// let getbox = box.getAttribute("class")
// box.setAttribute("class", `${getbox} box2`)


// // create a function that takes node and new tagName and replace the node with changed tag name in the DOM
// function changeTagName(oldNode, newTagName) {
//   if(oldNode instanceof Element) {
//     let p = document.createElement(newTagName);
//     p.innerHTML = oldNode.innerHTML;
//     for (let attr of oldNode.attributes) {
//       p.setAttribute(attr.name, attr.value);
//     }
//     oldNode.replaceWith(p);
//   } else {
//     console.log("invalid node");
//   }
// }
// let div = document.querySelector("#boxes")
// changeTagName(div , "a");


// how to manipulate css
// let div = document.querySelector(".boxes")
// div.setAttribute("style", "background-color: red; color: white") // first method
// div.setAttribute("class" , "b")  // second method
//  div.style.backgroundColor = "green"  // third method
// div.style.cssText = "background-color: blue; color: white" fourth method

// using classList property add(), remove(), toggle(), contains()
// div.classList.add("boxes2")  // add class
// console.log(div.className)

// div.classList.remove("boxes")  // reove class
// console.log(div.className)

// div.classList.toggle("boxes")  // if you have class so remove that class but you dont have class its doing add class
// console.log(div.className)

// let a = div.classList.contains("boxes") // check class name you have or not
// console.log(a)



// Q=1=> create a simple website theme changing functionality
// let button = document.querySelector("button")
// let div = document.querySelector(".ques1")

// button.addEventListener("click", ()=>{
//   if(!(div.className === "dark")){
//     div.className = "dark"
//   } else{
//     div.className = ".ques1"
//   }

// ===============OR=====================

// div.classList.toggle("dark"); // it is vary simple
// })



// Event Handling


