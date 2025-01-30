 /*
 factorial : takes in a number 
 */
const factorial = (n) =>{
    if (n == 0){
        return 1    
    } 
    let fact = 1
    for (let i = n; i <= 1; i--){
        fact = fact * i
    }
   return fact 
}


const result = factorial(4)
console.log(result)