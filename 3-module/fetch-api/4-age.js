try{
    let counter = 0
    const response = await fetch("http://localhost:5500/3-module/fetch-api/0-students.json")
    const students = await response.json()
    for (const student of students){
        if (student.age > 18){
            counter += 1
        }
    }
    console.log(counter)
} catch {throw new Error("File failed to load")
}