// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('reverseBetweenList');
element.innerHTML = `<h1>ReverseBetweenList</h1>`;
element.onclick = () =>
  (element.innerHTML = reverseBetweenList(linkedlist, 2, 4));

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
  // console.table(head);
  result.push(head.value);
  printList(head.next);
  return result;
};

const linkedlist = [1, 2, 3, 4, 5].reduce((acc, val) => {
  return new Node(val, acc);
}, null);

console.log([5, 4, 3, 2, 1]);
var reverseBetweenList = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;

    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;
  console.log(tail);
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return printList(head);
  } else {
    return printList(newList);
  }
};
