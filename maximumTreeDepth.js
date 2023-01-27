// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('maximumTreeDepth');
element.innerHTML = `<h1>MaximumBinaryTreeDepth</h1>`;
element.onclick = () =>
  (element.innerHTML = maximumTreeDepth([3, 9, 20, null, null, 15, 7]));

var maximumTreeDepth = function (tree) {
  const nodes = insertNodes(tree, 0);
  printTrees(nodes);
  return maxDepth(nodes, 0);
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var maxDepth = function (node, seen) {
  if (node === null) {
    return seen;
  }
  seen++;
  return Math.max(maxDepth(node.left, seen), maxDepth(node.right, seen));
};
var insertNodes = function (arr, i) {
  let node = null;

  if (i < arr.length && arr[i] !== null) {
    //base condition
    node = new TreeNode(arr[i]);
    node.left = insertNodes(arr, 2 * i + 1);
    node.right = insertNodes(arr, 2 * i + 2);
  }
  return node;
};

var printTrees = function (tree) {
  // indorder
  if (tree != null) {
    printTrees(tree.left);
    console.log(tree.value);
    printTrees(tree.right);
  }
};
