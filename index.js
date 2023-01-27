// Import stylesheets
import './style.css';

// Write Javascript code!

const element = document.getElementById('bubbleSort');
element.innerHTML = `<h1>bubbleSort</h1>`;
element.onclick = () =>
  (element.innerHTML = bubbleSort([90, 10, 60, 20, 50, 99, 87, 45]));

const bubbleSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};
