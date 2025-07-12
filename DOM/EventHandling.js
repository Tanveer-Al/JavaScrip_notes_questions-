// let button = document.querySelector("button")
// button.onclick = ()=>{
//     console.log("ek click js file me")
// }
// button.ondblclick = ()=>{
//     console.log("db click js file me")
// }
// button.onclick = ()=>{
//     console.log("ye pahle wale onclick ko over write kar dega")
// }

// but
// let button = document.querySelector("button")
// button.addEventListener("click", ()=>{
//     console.log("1st event lisner")
// })
// button.addEventListener("click", ()=>{
//     console.log("2st event lisner")
// })

// remove event lisner
// let button = document.querySelector("button");

// function handleClick() {
//     console.log("1st event lisner");
// }

// button.addEventListener("click", handleClick);

// // To remove the event listener:
// button.removeEventListener("click", handleClick);

// Event Object
// let button = document.querySelector("button")
// button.addEventListener("click", (event)=>{
//     console.log(event)
// })

// mousedown and mouseup
// let box1 = document.querySelector(".box1")
// box1.addEventListener("mousedown",()=>{
//     box1.style.borderRadius = "50%"
// })
// box1.addEventListener("mouseup",()=>{
//     box1.style.borderRadius = "0%"
// })

//mouseenter and mouseleave
// let box1 = document.querySelector(".box1")
// box1.addEventListener("mouseenter",()=>{
//     box1.style.borderRadius = "50%"
// })
// box1.addEventListener("mouseleave",()=>{
//     box1.style.borderRadius = "0%"
// })

// mouseover and mouseout
// let box1 = document.querySelector(".box1")
// box1.addEventListener("mouseover",()=>{
//     box1.style.borderRadius = "50%"
// })
// box1.addEventListener("mouseout",()=>{
//     box1.style.borderRadius = "0%"
// })

// mousemove
// let box1 = document.querySelector(".box1")
// box1.addEventListener("mousemove",()=>{
//     box1.style.borderRadius = "50%"
// })

// contextmenu
// box1.addEventListener("contextmenu",()=>{
//    console.log("kya huwa") // box1 par right click par output milega
// })

// keydown & keypress & keyup =>when you press any key (not mouse) then it will be work but first click
// let button = document.querySelector("button")
// button.addEventListener("keydown",()=>{
//     button.style.borderRadius = "50%"
//     console.log("key down huwa")
// })
// button.addEventListener("keypress",()=>{
//    console.log("key press huwa")
// })
// button.addEventListener("keyup", ()=>{
//     button.style.borderRadius = "0%"
//     console.log("key up huwa")
// })

// Form Events
// submit
// let form = document.querySelector("form");
// let button = document.querySelector(".button");
// let reset = document.querySelector(".reset");
// let input = document.querySelector("input");

// button.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log("form submit huwa kya?")  //form submit kisi button par kaam nahi karta hai
// })

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log("ab form submit hoga")  //form par submit kaam karta hai
// })

//focus =======when you are in the input box
// input.addEventListener("focus", () => {
//   console.log("focus ho raha hai"); //form par submit kaam karta hai
// });

// blur=========when you out of the box
// input.addEventListener("blur", () => {
//   console.log("blur ho raha hai"); //form par submit kaam karta hai
// });

//reset  ========== form reset
// reset.addEventListener("reset", (e)=>{
//      e.preventDefault()
//     console.log("reset ho gaya")
// })

// input==========value chage real time
// input.addEventListener("input",()=>{
//     console.log(input.value)
// })

//change =======value show when you out of the box
//  input.addEventListener("change",()=>{
//     console.log(input.value)
// })

// touch events=======it is work only mobile screen
//(1)=> touchstart=======finger touch the screen
//(2)=> touchmove=========fingure move on screen
//(3)=> touchend========fingure removed from screen
//(4)=> touchcancel========touch interrupted

// window Events ========load====DOMContentLoaded======resize======scroll

//clipbord Event=======copy=====cut===========paste

// Q=1=>
// let inc = document.querySelector(".inc");
// let dec = document.querySelector(".dec");
// let span = document.querySelector("span");

// dec.addEventListener("click", () => {
//   let value = Number(span.innerHTML);
//   if (value <= 1) {
//     return;
//   }
//   span.innerHTML = value - 1;
// });
// inc.addEventListener("click", () => {
//   span.innerHTML = Number(span.innerHTML) + 1;
// });

// Q=>2=>
// let form = document.querySelector(".form");
// let nameInput = document.querySelector("#name");
// let emailInput = document.querySelector("#email");
// let submitBtn = document.querySelector("subBtn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!nameInput.value || !emailInput.value) {
//     alert("plese fill form");
//     return;
//   }
//   let div = document.createElement("div");
//   div.innerHTML = `<p>${nameInput.value}</p><br><p>${emailInput.value}</p>`;
//   form.append(div);
// });
