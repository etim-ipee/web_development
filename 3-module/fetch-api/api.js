const wrapper = document.getElementById("wrapper")
document.addEventListener("DOMContentLoaded", async () => {
    try{
        const response = await fetch("http://localhost:5500/3-module/fetch-api/0-students.json")
        const students = await response.json()
        for (const student of students){
            const article = document.createElement("article")
            //create javascript templates
            article.innerHTML = ` 
                <p>Firstname: </p>
                <p>${student.firstName}</p>
                <p>Lastname: </p>
                <p>${student.lastName}</p>
                <p>Age: </p>
                <p>${student.age}</p>
                <p>Subject: </p>
                <ul>
                    ${student.subjects.map(item => `<li>${item}</li>`)}
                </ul>
            `
            wrapper.appendChild(article)    
        }
    } catch {
        throw new Error("File failed to load")
    }
})