// Functioning the implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // The outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // The inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

            // If the current element is greater than the next element, it swap them
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;

                console.log(`Swapped ${arr[j + 1]} and ${arr[j]}`);
            }
        }

        // If there's no two elements were swapped in the inner loop, then the array will sorted
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// To create array and populate  by using prompt to let user input
let numbers = [];
for (let i = 0; i < 10; i++) {
    let input = prompt("Enter a number:");
    numbers.push(Number(input)); // Convert the input to a number and push to the array
}

// Log the original array
console.log("Original array:", numbers);

// Sort array that using Bubble Sort
let sortedArray = bubbleSort(numbers);

// Log sorted array
console.log("Sorted array:", sortedArray);
