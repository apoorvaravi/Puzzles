// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('findKthLargest');
element.innerHTML = `<h1>FindKthLargest</h1>`;
element.onclick = () =>
  (element.innerHTML = findKthLargest([1, 5, 7, 9, 4], 3));

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  return nums[len - k];
};
