// Import stylesheets
import './style.css';

// Write Javascript code!
const ele = document.getElementById('startEndSearchinArray');
ele.innerHTML = `<h1>Binary search to get range in sorted Array</h1>`;
ele.onclick = () =>
  (twosumEle.innerHTML = rangeSearch(
    [1, 2, 5, 5, 5, 5, 9], 10)); // [2, 5]


const binarySearch = function (numbers, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      console.log(mid);
      console.log(numbers[mid] < target);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const rangeSearch = function (numbers, target) {

  if(numbers.length === 0) {
    return [-1, -1];
  }
  const firstPos = binarySearch(numbers, 0, numbers.length - 1, target);
  if(firstPos === -1) {
    return [-1, -1]; //not found
  }

  let startPos, endPos, prevstartPos, prevendPos;
  startPos = firstPos;
  endPos = firstPos;

  while(startPos !== -1 ) {
    prevstartPos= startPos;
    startPos = binarySearch(numbers, 0, startPos - 1, target);

  }

  while(endPos !== -1 ) {
    prevendPos = endPos;
    endPos = binarySearch(numbers, endPos + 1, numbers.length -1 , target);
  }


  return [prevstartPos, prevendPos];
 
}