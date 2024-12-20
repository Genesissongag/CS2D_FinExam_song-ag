// Initialize the empty array to put grocery items
let groceryStack = [];

// Function to check if the stack is empty and return the value
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log("Current top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}

// Function to add item to the stack
function push(item) {
    groceryStack.push(item);
    console.log(`Added "${item}" to the stack.`);
    peek(); // Calling peek to show the current top item
    console.log("Current stack:", groceryStack);
}

// Function by removing the last added item from the stack
function pop() {
    if (peek() !== null) { // Only pop if the stack is not empty
        const removedItem = groceryStack.pop();
        console.log(`Removed "${removedItem}" from the stack.`);
        peek(); // Call peek to show the current top item
        console.log("Current stack:", groceryStack);
    }
}

// Collecting five grocery items from the user input 
for (let i = 0; i < 5; i++) {
    const item = prompt(`Enter grocery item ${i + 1}:`);
    push(item); // It push each item to the stack
}

// for example usage of pop function
pop(); // Removing the last added item
