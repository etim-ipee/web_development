// A module that fetches student record from student.json
const response = await fetch("http://localhost:5500/3-module/fetch-api/0-students.json")
const student = await response.json()
console.log(student)