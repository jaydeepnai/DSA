class NI {
    data: number;
    next: NI | null;

    constructor(data: number, next: NI | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LLst {
    private head: NI | null;
    private size: number;

    constructor(node: NI) {
        this.head = node;
        this.size = 1;
    }

    // Add node at the last position
    addAtLast(node: NI): void {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Detect cycle using Floyd’s Cycle Detection Algorithm
    detectCycle(): boolean {
        let slow: NI | null = this.head;
        let fast: NI | null = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow!.next;       // Move one step
            fast = fast.next.next;  // Move two steps

            if (slow === fast) {
                return true; // Cycle detected
            }
        }
        return false; // No cycle
    }

    // Print the linked list (for debugging, without infinite loop in cycles)
    print(): void {
        let current = this.head;
        const values: number[] = [];
        let count = 0; // To prevent infinite loops in case of a cycle

        while (current && count < this.size) {
            values.push(current.data);
            current = current.next;
            count++;
        }
        console.log(values.join(" -> "));
    }
}

// Example usage
const firstNode = new NI(10);
const list = new LLst(firstNode);

const secondNode = new NI(20,null);
const thirdNode = new NI(30,null);
const fourthNode = new NI(40,null);

list.addAtLast(secondNode);
list.addAtLast(thirdNode);
list.addAtLast(fourthNode);
list.print()
// Creating a cycle (linking last node to second node)
fourthNode.next = firstNode;

console.log("Cycle Detected:", list.detectCycle()); // Output: true
