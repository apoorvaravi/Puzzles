// Import stylesheets
import './style.css';

// Write Javascript code!
const twosumEle = document.getElementById('twoSumwithinputSortedArray');
twosumEle.innerHTML = `<h1>Two Sum II - Input Array Is Sorted</h1>`;
twosumEle.onclick = () =>
  (twosumEle.innerHTML = twoSumwithinputSortedArray([2, 3, 4], 6));

// T: o(n) S: o(n)
const twoSumwithinputSortedArray = function (numbers, target) {
  const numMap = {};
  for (let i = 0; i < numbers.length; i++) {
    let numTofind = numbers[i];
    if (numMap[numTofind]) {
      return [numMap[numTofind], i + 1];
    } else {
      numTofind = target - numbers[i];
      numMap[numTofind] = i + 1;
    }
  }
  return 'Not found';
};
