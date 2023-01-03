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

  while (p >= 0 || q >= 0) {
    if (s[p] === '#' || t[q] === '#') {
      if (s[p] === '#') {
        let bsp = 2;
        while (bsp > 0) {
          p--;
          bsp--;
          if (s[p] === '#') {
            bsp += 2;
          }
        }
      }

      if (t[q] === '#') {
        let tsp = 2;
        while (tsp > 0) {
          q--;
          tsp--;
          if (t[q] === '#') {
            tsp += 2;
          }
        }
      }
    } else {
      if (s[p] !== t[q]) {
        return false;
      } else {
        p--;
        q--;
      }
    }
  }
  return true;
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
