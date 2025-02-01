const students = ["John", "James", "Ibrahim", "Nuhu"]
console.log(students[Math.floor(students.length/2)])

// there're 3 ways of printing in an array: 1. for, 2. map, 3. for..of.
// To swap items in array
for (let i = 0; i < students.length / 2; i++){ // for loop
    let temp = students[i]
    students[i] = students[students.length -1 -i]  //4-1-0
    students[students.length-1-i] = temp
}
console.log(students)

students.map((student)=> console.log(student))

console.log(students.includes("Mary"))
