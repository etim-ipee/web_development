//A function that can detect palinndromes

function isPalindrome(str) {
    // This funcion removes non-alphanumeric xters and converts to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // This function reverses the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // This function checks if the cleaned string is equal to Sits reverse
    return cleanedStr === reversedStr;
}

// Example usage:
const input = "A man, a plan, a canal, a girl, Panama!";
console.log(`Is the input a palindrome? ${isPalindrome(input)}`);
