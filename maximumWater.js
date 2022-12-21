// Import stylesheets
import './style.css';

// Write Javascript code!
const maximumWaterEle = document.getElementById('maximumWater');
maximumWaterEle.innerHTML = `<h1>MaximumWater</h1>`;
maximumWaterEle.onclick = () =>
  (maximumWaterEle.innerHTML = maximumWater([7, 1, 2, 3, 9, 8]));

// Two pointer techinques = a = l*b
const maximumWater = function (array) {
  let maxArea = 0;
  for (let i = 0; i < array.length; i++) {
    const lastIndex = array.length - 1;
    const value = array[lastIndex];
    const area = Math.min(array[i], value) * (lastIndex - i);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};

const maximumWaterBrute = function (array) {
  let maxArea = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const area = Math.min(array[i], array[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
