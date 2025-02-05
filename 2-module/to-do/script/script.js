//step 1: Grab refereces from the HTML elements, then...
// Get the form element by its ID
const form= document.getElementById('todo-form');
// Get the input element by its ID
const input= document.getElementById('todo-input');
// Get the unordered list element by its ID
const list= document.getElementById('todo-list');

//Step 2. Define the addTodo Function
/**
 * addTodo - A function that adds todo to the list
 */
const addTodo = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault()
    // Get the trimmed text value from the input field
    const text = input.value.trim()
    //check if the input text is not empty
    if (text !== ""){
        //Create a new list item element
        const item = document.createElement("li")
        // Calculate a new unique ID based on the number of children in the list
        const newId = list.children.length + 1
        // Set the inner HTML of the new list item
        item.innerHTML = `
        <div>
            <input type='checkbox' />
            <label>${text}</label>
            <button data-id='${newId}' id='btn'>Delete</button>
        </div>
        `
        // Append the new list item to the unordered list
        list.appendChild(item)
        //clear the input field
        input.value = ""

        // Get the delete button element by its data-id attribute
        const button = document.querySelector(`[data-id='${newId}']`)
        // Add a click event listener to the delete button
        button.addEventListener('click', () => deleteTodo(button.dataset.id))
    }
}
//Step 3.Define the deleteTodo Function
/**
 * deleteTodo - A function that deletes a todo item from the list
 */
const deleteTodo = (id) => {
    // Remove the list item element that corresponds to the given ID
list.removeChild(document.querySelector(`[data-id='${id}']`).parentElement.parentElement)
}
//step 4. Attach the Event Listener to the Form:
form.addEventListener("submit", addTodo)


