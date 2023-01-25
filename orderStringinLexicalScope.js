// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('orderinLexicalScope');
element.innerHTML = `<h1>OrderinLexicalScope</h1>`;
element.onclick = () => (element.innerHTML = orderinLexicalScope('apoorva', 2));

function orderinLexicalScope(str, pass) {
  let result = [...str];

  let min;

  for (let i = 0; i < pass; i++) {
    for (let j = i + 1; j < str.length; j++) {
      min = Math.min(result[i].charCodeAt(), result[j].charCodeAt());
    }
    if (result[i].charCodeAt() === min) {
      continue;
    }

    if (result[i].charCodeAt() > min) {
      const pos =
        str.substring(i, str.length).indexOf(String.fromCharCode(min)) + 1;
      let temp = result[i];
      result[i] = result[pos];
      result[pos] = temp;
    }
  }

  return result;
}
