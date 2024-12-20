// Prompt to let user input for names and ages
let subArray1 = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise)").split(",");
let subArray2 = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9)").split(",");

// Converting ages from strings to numbers
subArray2 = subArray2.map(age => parseInt(age.trim()));

// Restructure the arrays into a new multi-dimensional array
let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i].trim(), subArray2[i]]);
}

// Log the restructured multi-dimensional array like [name, age] for per line
restructuredArray.forEach(item => {
  console.log(item);
});
