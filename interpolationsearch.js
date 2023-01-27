// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('interpolationSearch');
element.innerHTML = `<h1>InterpolationSearch as seen in telephone directry</h1>`;
element.onclick = () =>
  (element.innerHTML = interpolationSearch([10, 20, 30, 40, 50, 60, 70], 60));
//could be evenly distributed meaning the diff between items would be the same or it could just be distributed [sorted] without same diff between items

const interpolationSearch = function (array, target) {
  // interplation uses a formula which has to be memorised

  let pos = 0;
  let low = 0;
  let high = arr.length - 1;

  //   formula = low + (target - array[low])/(array[high] - array[low]) * (high - low);

  while (low <= high) {
    pos = Math.floor(
      low + ((target - array[low]) / (array[high] - array[low])) * (high - low)
    );
    if (array[pos] === target) {
      console.log(pos);
      return array[pos];
      
    } else if (array[pos] < target) {
      low = pos + 1;
    } else {
      high = high + 1;
    }
  }
  return -1;
};
