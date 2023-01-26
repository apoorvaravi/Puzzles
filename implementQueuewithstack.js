// Import stylesheets
import './style.css';

// Write Javascript code!
const ele = document.getElementById('implementQueuewithstack');
ele.innerHTML = `<h1>Implement Queue with Stack</h1>`;
ele.onclick = () => (ele.innerHTML = implementQueuewithstack());

const implementQueuewithstack = function () {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.peek();
  q.printQueue();
  q.dequeue();
  q.printQueue();
};

class Queue {
  constructor() {
    this.in = [];
    this.out = [];
    this.size = 0;
  }

  enqueue(ele) {
    this.in.push(ele);
    this.size++;
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    } else {
      this.out.pop();
    }

    this.size--;
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    } else {
      this.out[this.out.length - 1];
    }

    console.log('this.out:::' + this.out);
  }

  isfull() {
    return this.in.length === size && this.out.length === size;
  }

  isempty() {
    return this.in.length === 0 && this.out.length === 0;
  }

  printQueue() {
    console.log('Queue::' + this.in + this.out);
  }
}
