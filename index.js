// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('trappingRainwater');
element.innerHTML = `<h1>TrappingRainwater</h1>`;
element.onclick = () =>
  (element.innerHTML = trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Two pointer techinques
const trappingRainWater = function (array) {
  let total = 0;
  let maxLeft = 0,
    maxRight = 0,
    leftp = 0,
    rightp = 0;
  for (let i = 0; i < array.length; i++) {
    leftp = i;
    rightp = i;
    while (leftp <= 0) {
      maxLeft = Math.max(maxLeft, array[leftp]);
      leftp--;
    }
    while (rightp > array.length) {
      maxRight = Math.max(maxRight, array[rightp]);
      rightp++;
    }
    console.log({ maxLeft, maxRight });
    const cw = Math.min(maxLeft, maxRight) - array[i];
    if(cw >= 0) {
      total+=cw;
    }
  }
  return total;
};

// const maximumWater = function (array) {
//   let maxArea = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const area = Math.min(array[i], array[j]) * (j - i);
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// };
