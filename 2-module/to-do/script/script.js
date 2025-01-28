const form= document.getElementById('todo-form');
const input= document.getElementById('todo-input');
const list= document.getElementById('todo-list');
const button=document.getElementById('btn');

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
const deleteTodo = () => {
    alert("Delete functionality not implemented yet")
}
form.addEventListener("submit", addTodo)
