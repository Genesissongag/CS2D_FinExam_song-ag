// Prompt to let user input
let numbersStr = prompt("Enter numbers separated by commas (e.g., 24,65,21):");
let namesStr = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie):");

// Converting the input strings into arrays
let numbers = numbersStr.split(',').map(Number); // to Convert numbers
let names = namesStr.split(','); // to Keep as strings

// Merging both arrays into a single array
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sorting numbers in reverse order and log it
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers); // Corrected here

// Sort the names alphabetically and log it
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
