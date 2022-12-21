// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('trappingRainwater');
element.innerHTML = `<h1>TrappingRainwater</h1>`;
element.onclick = () =>
  (element.innerHTML = trappingRainWater([0, 1, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

const trappingRainWater = function (heights) {
  let maxleft = 0,
    maxright = 0,
    total = 0;

  let left = 0,
    right = heights.length - 1;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] > maxleft) {
        maxleft = heights[left];
      } else {
        total += maxleft - heights[left];
      }
      left++;
    } else {
      if (heights[right] > maxright) {
        maxright = heights[right];
      } else {
        total += maxright - heights[right];
      }
      right--;
    }
  }

  return total;
};

const trappingRainWaterBrute = function (heights) {
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
