const student = {
    firstName: "Kelvin",
    lastName: "Ben",
    age: 25,
    subjects:["Maths","English", "Physics"]
}
console.log(student.firstName)
console.log(student["lastName"])
console.log(student["age"])
student.subjects.push("Economics")
console.log(student["subjects"])
student.subjects.shift()
console.log(student.subjects)
console.log(Object.keys(student))
console.log(Object.values(student))
student["country"] = "Nigeria"
console.log(student)