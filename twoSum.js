// Import stylesheets
import './style.css';

// Write Javascript code!
const twosumEle = document.getElementById('twoSum');
twosumEle.innerHTML = `<h1>Two sum</h1>`;
twosumEle.onclick = () => (twosumEle.innerHTML = twosum([1, 3, 7, 9, 2], 11));

const twosum = function (array, target) {
  let numMap = new Map();
  for (let i = 0; i < array.length; i++) {
    let ntf = array[i];
    if (numMap.has(ntf)) {
      return [numMap.get(ntf), i];
    } else {
      ntf = target - array[i];
      numMap.set(ntf, i);
    }
  }

  // Brute
  const twosumBrute = function (array, target) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
          return [array[i], array[j]];
        }
      }
    }
  };
};
