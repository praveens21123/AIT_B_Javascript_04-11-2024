// Events - Is an Action, Which is trigged by the end user.
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

const btn = document.querySelector("button")
btn.addEventListener("click", clickHandler)
btn.addEventListener("mouseover", hoverHandler)

btn.removeEventListener("click", clickHandler)
