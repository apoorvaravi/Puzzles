// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('traverse2Dmatrix');
element.innerHTML = `<h1>Traverse2Dmatrix</h1>`;
element.onclick = () =>
  (element.innerHTML = traverse2Dmatrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]));

var traverse2Dmatrix = function (matrix) {
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
  ];

  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const results = [];

  const traversalDFS = function () {
    dfs(0, 0); //recursive func call
    return results;
  };

  const dfs = function (row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= matrix.length ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      console.log('Return from function -row' + row + ':col:' + col);
      return;
    }

    seen[row][col] = true;
    results.push(matrix[row][col]);
    console.log('first we update the seen [' + row, col + ']');

    for (let i = 0; i < directions.length; i++) {
      const currentDirection = directions[i];
      console.log(
        'when recived directions[' +
          currentDirection +
          ']' +
          '-i=' +
          i +
          ':row[' +
          row,
        col + ']' + 'matrix-value-' + matrix[row][col]
      );
      let cole = col + currentDirection[1];
      console.log('call the recursively called col:' + cole);
      dfs(row + currentDirection[0], col + currentDirection[1]);
    }
  };

  return traversalDFS(dfs(0, 0));
};
