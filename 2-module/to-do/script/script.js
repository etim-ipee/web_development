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
        const newId = list.children.length + 1
        item.innerHTML = `
        <div>
            <input type='checkbox'  />
            <label>${text}</label>
            <button data-id='${newId}' id='btn'>Delete</button>
        </div>
        `
        list.appendChild(item)
        input.value = ""

        // Get delete button

        
        const button = document.querySelector(`[data-id='${newId}']`)
        button.addEventListener('click', () => deleteTodo(button.dataset.id))
    }
}
const deleteTodo = (id) => {
    //alert("Delete functionality not implemented yet")
    list.removeChild(document.querySelector(`[data-id='${id}']`).parentElement.parentElement)
}
form.addEventListener("submit", addTodo)


