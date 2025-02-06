document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = input.value.trim();
      if (text !== "") {
        const item = document.createElement("li");
        const newId =list.children.length+ 1;
        item.innerHTML = `
          <div>
            <input type="checkbox" />
            <label>${text}</label>
          </div>
          <button data-id='${newId}' id-data='button'>Delete</button>
          
        `;
  
        // Add event listener to the delete button
        item.querySelector("button").addEventListener("click", () => {
          list.removeChild(item);
        });
  
        list.appendChild(item);
        input.value = "";
        //Get delete button

        const button = document.querySelector(`[data-id='${newId}']`)
        button.addEventListener('click', () => deleteTodo(button.dataset.id))
      }
    });
  });
  