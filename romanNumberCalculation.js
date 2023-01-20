// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('romanNumber');
element.innerHTML = `<h1>RomanNumber</h1>`;
element.onclick = () => (element.innerHTML = romanToInt('IX'));

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let number = 0;
  const a = [...s];

  for (let i = 0; i < a.length; i++) {
    let j = i + 1;
    if (
      (a[i] === 'I' && (a[j] === 'V' || a[j] === 'X')) ||
      (a[i] === 'X' && (a[j] === 'L' || a[j] === 'C')) ||
      (a[i] === 'C' && (a[j] === 'D' || a[j] === 'M'))
    ) {
      number += map[a[i] + a[j]];
      i++;
    } else {
      number += map[a[i]];
    }
  }
  return number;
};
