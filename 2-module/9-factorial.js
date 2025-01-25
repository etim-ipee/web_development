function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
let number = 6;
console.log(`The factorial of ${number} is ${factorial(number)}`);
