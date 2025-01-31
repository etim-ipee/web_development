
fetch("http://localhost:5500/3-module/fetch-api/0-students.json")
.then(data => data.json())
.then(students => {
    for (const student of students){
        if(student.age > 18)
            console.log(student)
    }
}).catch(error => console.log(error))
    