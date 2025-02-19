class NodeItem<T> {
    data: T;
    next: NodeItem<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: NodeItem<T> | null;

    constructor() {
        this.head = null;
    }

    // Append: Insert a new node at the end of the linked list
    append(data: T): void {
        const newNode = new NodeItem(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Prepend: Insert a new node at the beginning of the linked list
    prepend(data: T): void {
        const newNode = new NodeItem(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete: Remove the first occurrence of a node with the given data
    delete(data: T): void {
        if (!this.head) {
            return; // List is empty
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Search: Find the first occurrence of a node with the given data
    search(data: T): boolean {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true; // Data found
            }
            current = current.next;
        }
        return false; // Data not found
    }

    // Print: Display the elements of the linked list
    print(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30
console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false
