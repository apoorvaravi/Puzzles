// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('reverseBetweenList');
element.innerHTML = `<h1>ReverseBetweenList</h1>`;
element.onclick = () => (element.innerHTML = reverseBetweenList(linkedlist));

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
  console.table(head);
  result.push(head.value);
  printList(head.next);
  return result;
};

const linkedlist = [1, 2, 3, 4, 5].reduce(
  (acc, val) => new Node(val, acc),
  null
);

var reverseBetweenList = function (head, m = 2, n = 4) {
  let start = head;
  let currpos = 1;

  let currentNode = head;
  let newList = null;
  let tail = currentNode;

  while (currpos < m) {
    start = currentNode;
    currpos++;
    currentNode = currentNode.next;
  }

  while (currpos >= m && currpos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currpos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return printList(head);
  } else {
    return printList(newList);
  }
};
