// Import stylesheets
import './style.css';

// Write Javascript code!
const ele = document.getElementById('implementQueueOptimised');
ele.innerHTML = `<h1>Implement Queue with List</h1>`;
ele.onclick = () => (ele.innerHTML = implementQueueOptimised());

const implementQueueOptimised = function () {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.peek();
  q.printQueue();
  q.dequeue();
  q.printQueue();
  q.isEmpty();
};

class Queue {
  constructor() {
    this.rear = 0;
    this.front = 0;
    this.items = {};
    this.size = 0;
  }

  enqueue(value) {
    this.items[rear] = value;
    this.rear++;
    this.size++;
  }

  dequeue() {
    const valuetoDelete = this.items[front];
    delete this.items[front];
    this.front++;
    this.size++;
    return valuetoDelete;
  }

  peek() {
    return this.items[front];
  }

  isEmpty() {
    return this.rear && this.front === 0;
  }

  size() {
    return this.rear === this.front;
  }

  printQueue() {
    console.log(this.items);
  }
}
