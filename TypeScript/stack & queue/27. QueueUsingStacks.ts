class QueueUsingStacks<T> {
  private stack1: T[];
  private stack2: T[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value: T): void {
    this.stack1.push(value);
  }

  dequeue(): T | null {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop() as T);
      }
    }
    return this.stack2.pop() ?? null; // Return null if queue is empty
  }

  peek(): T | null {
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1];
    } else if (this.stack1.length > 0) {
      return this.stack1[0];
    }
    return null;
  }

  isEmpty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Example usage:
const queue = new QueueUsingStacks<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
