// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('matchingParenthesis');
element.innerHTML = `<h1>MatchingParenthesis</h1>`;
element.onclick = () => (element.innerHTML = matchingParenthesis('{[({{})]}'));

const matchingParenthesis = function (s) {
  let parenthesisArray = [];
  if (s.length <= 1) {
    return false;
  }
  const paramMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (paramMap[s[i]]) {
      parenthesisArray.push(s[i]);
    } else {
      const lastItem = parenthesisArray.pop();
      if (s[i] !== paramMap[lastItem]) {
        return false;
      }
    }
  }

  return parenthesisArray.length === 0;
};
