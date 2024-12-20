// Getting the input strings by using prompt()
let str1 = prompt("Enter the first string (e.g., RACECAR):").toUpperCase();
let str2 = prompt("Enter the second string (e.g., RECORDER):").toUpperCase();


// Function to reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Reverse the strings 1&2
let reversedStr1 = reverseString(str1);
let reversedStr2 = reverseString(str2);

// Log original and it will reversed the strings
console.log(`Original string 1: ${str1}`);
console.log(`Reversed string 1: ${reversedStr1}`);
console.log(`Original string 2: ${str2}`);
console.log(`Reversed string 2: ${reversedStr2}`);


// Checking the strings 1&2 of palindromes and log the results if either str1 or 2 is true, and which is false.
console.log(`Is string 1 a palindrome? ${str1 === reversedStr1}`);
console.log(`Is string 2 a palindrome? ${str2 === reversedStr2}`);
