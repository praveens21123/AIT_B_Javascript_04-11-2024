// Selecting the input fields
const nameVal = document.getElementById("name-value")
const emailVal = document.getElementById("email-value")
const passVal = document.getElementById("pwd-value")
const phnVal = document.getElementById("phone-value")

// Selecting the error fields

const nameErr = document.getElementById("name-error")
const emailErr = document.getElementById("email-error")
const passErr = document.getElementById("pwd-error")
const phnErr = document.getElementById("phone-error")

const btn = document.getElementById("btn")


function nameHandler(){
  const name = nameVal.value
  // console.log(name);

  if(name.length === 0){
    btn.disabled = true
    nameErr.textContent = "Name is Required"
    nameVal.style.border = "2px solid red"
    return false
  }
  
  btn.disabled = false
  nameErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  nameVal.style.border = "2px solid green"
  nameVal.style.outline = "none"
  return true
}

nameVal.addEventListener("keyup", nameHandler)
nameVal.addEventListener("blur", nameHandler)

const form = document.querySelector("form")

form.addEventListener("submit", (event)=>{
   event.preventDefault()
   if(!nameHandler()){
    return false
   }
})