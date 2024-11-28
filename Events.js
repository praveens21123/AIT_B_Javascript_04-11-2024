// Events - Events is an action it can be triggered by the End user. That occurs as per the user's instruction as input and gives the output in response.
/* 
--> Global Events
1.) click
2.) dbclick

--> Keyboard Events
1.) Keypress
2.) keyup
3.) keydown

--> Mouse Events
1.) mouseover
2.) mousein
3.) mouseout

--> Page Events
1.) Scroll
2.) load
3.) Resize

--> Form Events
1.) submit
2.) onchange
3.) focus
4.) blur
*/

/* 
1.) Inline event handle
 <button onclick="clickHandler()">Click me</button>
 function clickHandler(){
   alert("Button was Clicked!")
 }

2.) AddEventListener Method.
syntax:
  ele.addEventListener("event", callBackFn)
*/

function clickHandler(){
  alert("Button was Clicked!")
}
function hoverHandler(){
  console.log("Button was Hovered!")
}

const btn1 = document.querySelector("button")
btn1.addEventListener("click", clickHandler)
btn1.addEventListener("mouseover", hoverHandler)

btn1.removeEventListener("click", clickHandler)

//Timers
/* 
1.) setTimeOut

syntax:
setTimeout(()=>{}, time in miliseconds) 1 sec = 1000 miliseconds


2.) setInterval

syntax:
setInterval(()=>{}, time in miliseconds) 1 sec = 1000 miliseconds

*/

const btn2 = document.querySelector("button")

const timer = setTimeout(()=>{
  console.log("Hello World!");
}, 5000)

btn2.addEventListener("click", ()=>{
  clearTimeout(timer)
})
////////////////////////////////////////////
let i = 0
const int = setInterval(()=>{

  if(i < 5){
    i++
    console.log(i);
  }else{
    clearInterval(int)
  }
}, 1000)
//////////////////////////////////////////////
//Event Object - Contains information about it, such as the type of event, the target element, and additional data related to the event. It is automatically passed to event handler functions and provides methods and properties to control event behavior.

const btn3 = document.querySelector("button")

btn3.addEventListener("click", (event)=>{
  console.log(event);
})

////////////////////////////////////////////
// Event Propogation - which events are triggered in the DOM, starting with the capturing phase (from the root to the target), followed by the target phase, and then the bubbling phase (from the target back to the root).

const btn4 = document.querySelector("button")
const div = document.querySelector(".parent")
const body = document.querySelector("body")

body.addEventListener("click", ()=>{
  console.log("Body was Clicked!");
})

div.addEventListener("click", ()=>{
  console.log("Div was clicked!");
  
})

btn4.addEventListener("click", (event)=>{
  console.log('Button was Clicked!');
})
/////////////////////////////////////////////
// Event Deligation - Where a single event listener is added to a parent element to manage events for its child elements, taking advantage of event propagation, particularly the bubbling phase, to handle dynamically added elements efficiently.

const listItems = document.querySelectorAll("ul li")
// console.log(listItems);

// for(let i = 0; i < listItems.length; i++){
//   listItems[i].addEventListener("click", (e)=>{
//     // console.log(e.target);
//     e.target.classList.toggle("highlight")
//   })
// }

const ulEle = document.querySelector("ul")
ulEle.addEventListener("click", (e)=>{
  e.target.closest("li").classList.toggle("highlight")
})