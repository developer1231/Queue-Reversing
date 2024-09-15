# Queue Reversal Using a Single Queue in JavaScript
This simple yet elegant JavaScript implementation demonstrates how to reverse a queue using a single additional queue. Instead of relying on arrays or stacks, this solution uses basic queue operations (enqueue and dequeue) to reverse the order of elements.

**Key Features:**
- Queue Operations: Implements custom enqueue and dequeue methods to simulate queue behavior.
- Efficient Approach: Reverses a queue by repeatedly dequeuing elements and appending them to an auxiliary queue, preserving queue properties.
- No External Data Structures: Uses only the input queues for the entire operation, avoiding stacks or arrays for reversal.

**Usage**

```js
let queue1 = [];
let queue2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(reverseQueue(queue1, queue2));  
// shall return: [10,9,8,7,6,5,4,3,2,1];
```

**How It Works:**
The outer while loop continues until all elements in Q2 are transferred to Q1.
The inner for loop rotates the queue such that the last element gets dequeued and added to Q1, reversing the order.
Once all elements have been processed, the reversed queue is stored in Q1.





