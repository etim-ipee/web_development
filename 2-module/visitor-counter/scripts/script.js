const add = document.getElementById("add")
const clear = document.getElementById("clear")
const del = document.getElementById("del")

const display= document.getElementById("display")


const addOne = () => {
    /*
    addOne - a function that counts visitors by one
    Return: none
    */
    display.textContent = parseInt(display.textContent) + 1
}

const minusOne = () => {
    /*
    minusOne - a function that removes visitors by one
    Ret,urn: none
    */
   if (parseInt(display.textContent)!= 0){
    display.textContent = parseInt(display.textContent) - 1
   }
}

const reset = () =>{
    /*
    reset - a function that sets the counter to zero
    Return: none
    */
    display.textContent = 0
}

add.addEventListener("click", addOne, false)
clear.addEventListener("click", reset, false)
del.addEventListener("click", minusOne)

const hello = document.getElementById("hello")
const screen = document.getElementById("screen")

const clickMe = () => {
    screen.textContent = "Hello world!"
}
hello.addEventListener("click",clickMe, false)