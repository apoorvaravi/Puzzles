// Import stylesheets
import './style.css';

// Write Javascript code!
const ele = document.getElementById('implementCircularQueue');
ele.innerHTML = `<h1>Implement Circular Queue</h1>`;
ele.onclick = () => (ele.innerHTML = implementCircularQueue());

const implementCircularQueue = function () {
  const q = new Queue(5);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  q.dequeue();
  q.enqueue(6);
  q.enqueue(5);
  q.enqueue(15);
  q.printQueue();
  return 'Open Console to see the magic';
};

class Queue {
  constructor(capacity) {
    this.rear = -1;
    this.front = -1;
    this.items = new Array(capacity);
    this.size = 0;
    this.capacity = capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('cannot insert');
      return null;
    } 

    this.rear = (this.rear + 1)% this.capacity;
    this.items[this.rear] = value;
    this.size++;
    if(this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('cannot delete');
      return null;
    }
    const valuetoDelete = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    if(this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return valuetoDelete;
  }

  peek() {
    if(!this.isEmpty()) {
    return this.items[this.front];
    } else 
    return null;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  printQueue() {
    console.log(this.items);
  }
}
