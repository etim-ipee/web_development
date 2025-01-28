const form= document.getElementById('todo-form');
const input= document.getElementById('todo-input');
const list= document.getElementById('todo-list');


/**
 * addTodo - A function that adds todo to the list
 */
const addTodo = (event) => {
    event.preventDefault()
    const text = input.value.trim()
    if (text !== ""){
        const item = document.createElement("li")
        item.innerHTML = `
        <div>
            <input type='checkbox' />
            <label>${text}</label>
            <button id='btn'>Delete</button>
        </div>
        `
        list.appendChild(item)
        input.value = ""

        // Get delete button
        const button=document.getElementById('btn');
        button.addEventListener('click',deleteTodo)
    }
}
const deleteTodo = () => {
    //alert("Delete functionality not implemented yet")
    const parent = document.getElementById('btn');
    console.log(parent.parentElement.parentElement)
    list.removeChild(parent.parentElement.parentElement)
}
form.addEventListener("submit", addTodo)
