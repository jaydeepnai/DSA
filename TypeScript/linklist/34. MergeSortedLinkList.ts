class NodeItem {
    data: number;
    next: NodeItem | null;

    constructor(data: number, next: NodeItem | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    head: NodeItem | null;

    constructor() {
        this.head = null;
    }

    // Add node at the last position
    addAtLast(data: number): void {
        const newNode = new NodeItem(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print the linked list
    print(): void {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(" -> ") || "Empty List");
    }
}

// Function to merge two sorted linked lists
function mergeSortedLists(list1: NodeItem | null, list2: NodeItem | null): NodeItem | null {
    let dummy = new NodeItem(0); // Dummy node to simplify logic
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining elements
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // The merged list starts from dummy.next
}

// Example usage
const list1 = new LinkList();
list1.addAtLast(1);
list1.addAtLast(3);
list1.addAtLast(5);

const list2 = new LinkList();
list2.addAtLast(2);
list2.addAtLast(4);
list2.addAtLast(6);

console.log("List 1:");
list1.print(); // Output: 1 -> 3 -> 5

console.log("List 2:");
list2.print(); // Output: 2 -> 4 -> 6

// Merge the lists
const mergedHead = mergeSortedLists(list1.head, list2.head);
const mergedList = new LinkList();
mergedList.head = mergedHead;

console.log("Merged List:");
mergedList.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
