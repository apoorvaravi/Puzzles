// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('backspaceString');
element.innerHTML = `<h1>BackspaceString</h1>`;
element.onclick = () => (element.innerHTML = backspaceString('ab#z', 'ac#zbbb'));

const backspaceString = function (...args) {
  const str1 = trunkHash(args[0]).toLocaleString();
  const str2 = trunkHash(args[1]).toLocaleString();
  if (str1.length !== str2.length) {
    return false;
  } else {
    return str1 === str2;
  }
};

function trunkHash(s) {
  let sArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') sArray.push(s[i]);
    else {
      sArray.pop(s[i - 1]);
    }
  }
  return sArray;
}

// one pointer brute force approach
// const trappingRainWater = function (heights) {
//   let totalWater = 0;

//   for (let p = 0; p < heights.length; p++) {
//     let leftP = p,
//       rightP = p,
//       maxLeft = 0,
//       maxRight = 0;

//     maxLeft = Math.max(...heights.slice(0, p));
//     maxRight = Math.max(...heights.slice(p, heights.length));
//     const currentWater = Math.min(maxLeft, maxRight) - heights[p];
//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }

//   return totalWater;
// };
