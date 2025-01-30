const swapNumbers =(a, b,) =>{
    let temp = a;//temp- temporary varable to stre 
    a = b;// content of a is assigned to b
    b = temp;//content of b is aaigned to temp.
    return [a, b]       
}
let num1 = 100;
let num2 = 250;
[num1, num2] = swapNumbers(num1, num2)
console.log(`After swaping: num1 = ${num1}, num2 = ${num2}`);
