// a funcntion that adopts closure technique
const createCounter =() => {
    let index = 7
    return () => {
        return index - 2
    }
}
const count = createCounter()
console.log(count())
console.log(count())
