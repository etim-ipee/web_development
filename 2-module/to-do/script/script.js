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
        item.innerText = text
        list.appendChild(item)
        input.value = ""
    }
}

form.addEventListener("submit", addTodo)
