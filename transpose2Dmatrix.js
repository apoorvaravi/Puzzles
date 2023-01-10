// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('transpose2Dmatrix');
element.innerHTML = `<h1>Transpose2Dmatrix</h1>`;
element.onclick = () =>
  (element.innerHTML = transpose2Dmatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]));

var transpose2Dmatrix = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let res = Array(matrix[0].length)
    .fill()
    .map(() => []);
  console.log(res);
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const item = matrix[row][col];
      res[col][row] = item;
    }
  }

  return res;
};
