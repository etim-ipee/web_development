document.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.getElementById("wrapper");
   

    // Add the heading
  const heading = document.createElement("h2");
  heading.textContent = "Students Information";
  wrapper.prepend(heading);
  
  
  
  
  
    try {
      const response = await fetch("http://localhost:5500/3-module/fetch-api/0-students.json");
      const students = await response.json();
  
      students.forEach(student => {
        const article = document.createElement("article");
  
        // Create HTML template using JavaScript template literals
        article.innerHTML = `

          <p><strong>StudentID:</strong> ${student.id}</p>
          <p><strong>Firstname:</strong> ${student.firstName}</p>
          <p><strong>Lastname:</strong> ${student.lastName}</p>
          <p><strong>Age:</strong> ${student.age}</p>
          <p><strong>Subjects:</strong></p>
          <ul>
            ${student.subjects.map(subject => `<li>${subject}</li>`).join('')}
          </ul>
        `;
  
        wrapper.appendChild(article);
      });
    } catch (error) {
      console.error("File failed to load", error);
    }
  });
  