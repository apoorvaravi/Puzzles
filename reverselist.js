// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('reverseLinkedList');
element.innerHTML = `<h1>ReverseLinkedList</h1>`;
element.onclick = () => (element.innerHTML = reverseList(linkedlist));

class Node {
  constructor(v, n = null) {
    this.value = v;
    this.next = n;
  }
}
const result = [];

var printList = function (head) {
  if (!head) {
    return result;
  }
  result.push(head.value);
  printList(head.next);
  return result;
};

const linkedlist = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new Node(val, acc),
  null
);

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return printList(prev);
};
