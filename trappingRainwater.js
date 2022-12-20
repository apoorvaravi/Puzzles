// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('trappingRainwater');
element.innerHTML = `<h1>TrappingRainwater</h1>`;
element.onclick = () =>
  (element.innerHTML = trappingRainWater([5, 0, 0, 0, 9]));

const trappingRainWater = function (heights) {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    maxLeft = Math.max(...heights.slice(0, p));
    maxRight = Math.max(...heights.slice(p, heights.length));
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};
