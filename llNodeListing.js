class Node {
    constructor(value) {
        this.value = value; // To set the value of the node
        this.next = null;   // By initialize the next node as null
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // Initialize the head of the list as null
        this.size = 0;      // Initialize the size of the list as 0
    }

    append(value) {
        const newNode = new Node(value); // To create a new node with the given value
        if (this.head === null) {         // If the list is empty
            this.head = newNode;          // Set the new node as the head
        } else {
            let current = this.head;
            while (current.next) {        // Traverse to the end of the list
                current = current.next;
            }
            current.next = newNode;       // Link the new node at the end
        }
        this.size++;                      // Increment the size of the list
        this.printList();                 // Print the list after appending
    }

    printList() {
        let current = this.head;
        const values = [];
        while (current) {                 // Traverse the list and collect values
            values.push(current.value);
            current = current.next;
        }
        console.log("Current Linked List:", values.join(" -> ")); // Print the list
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
