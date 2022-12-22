// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('backspaceString');
element.innerHTML = `<h1>BackspaceString</h1>`;
element.onclick = () =>
  (element.innerHTML = backspaceString('abc#z', 'abzz##z'));

const backspaceString = function (s, t) {
  let p = s.length - 1,
    q = t.length - 1;
  let res = false;
  let bsp = 0,
    tsp = 0;

  while (p >= 0 || q >= 0) {
    if (s[p] !== '#' && t[q] !== '#') {
      if (s[p] === t[q]) {
        res = true;
        p--;
        q--;
      } else {
        return false;
      }
    } else {
      if (s[p] === '#') {
        let temp = p;
        while (s[temp] === '#' && temp >= 0) {
          bsp = bsp + 2;
          temp--;
        }
        p = p - bsp;
      }

      if (t[q] === '#') {
        let temp = q;
        while (t[temp] === '#' && temp >= 0) {
          tsp = tsp + 2;
          temp--;
        }
        q = q - tsp;
      }
    }
  }
  return res;
};

// const backspaceStringBrute = function (...args) {
//   const str1 = trunkHash(args[0]).toLocaleString();
//   const str2 = trunkHash(args[1]).toLocaleString();
//   if (str1.length !== str2.length) {
//     return false;
//   } else {
//     return str1 === str2;
//   }
// };

// function trunkHash(s) {
//   let sArray = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '#') sArray.push(s[i]);
//     else {
//       sArray.pop(s[i - 1]);
//     }
//   }
//   return sArray;
// }
