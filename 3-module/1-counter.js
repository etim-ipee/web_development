const increment = ()=> {
    let count = 0
    return ()=>{
        count += 1
        return count
    }
}

const counter = increment()
console.log(counter())
console.log(counter())
console.log(counter())