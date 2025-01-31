try{
    const response = await fetch("http://localhost:5500/3-module/fetch-api/0-students.json")
    const students = await response.json()
    for (const student of students){
        if (student.firstName == "Blessing"){
            console.log(student)
        }
    }
} catch {
    throw new Error("File failed to load")
}
