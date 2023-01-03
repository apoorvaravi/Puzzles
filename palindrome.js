// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('palindrome');
element.innerHTML = `<h1>Palindrome</h1>`;
element.onclick = () => (element.innerHTML = palindrome('A man, a plan, a canal: Panama'));

const palindrome = function (s) {
  if(s.length <= 1) {
    return true;
  }

  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reverseString = s.split('').reverse().join('');
 return s === reverseString;
};


