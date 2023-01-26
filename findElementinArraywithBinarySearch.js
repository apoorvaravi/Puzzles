// Import stylesheets
import './style.css';

// Write Javascript code!
const ele = document.getElementById('findElementinArraywithBinarySearch');
ele.innerHTML = `<h1>Find Element in Array with BinarySearch</h1>`;
ele.onclick = () =>
  (ele.innerHTML = findElementinArraywithBinarySearch(
    [1, 2, 3, 4, 5, 6],
    6
  ));

// T: o(n) S: o(n)
const findElementinArraywithBinarySearch = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log('mid :::' + mid);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      console.log(mid);
      console.log(numbers[mid] < target);
      left = mid + 1;
      console.log('left:::' + left);
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
