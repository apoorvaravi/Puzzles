// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('almostpalindrome');
element.innerHTML = `<h1>Almostpalindrome</h1>`;
element.onclick = () => (element.innerHTML = almostpalindrome('abccdba'));
// L R

const almostpalindrome = function (s) {
  if (s.length <= 1) {
    return true;
  }

  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  function isPalindrome(args) {
    const reverseString = args.split('').reverse().join('');
    return args === reverseString;
  }

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      const leftsub = s.substring(0, left) + s.substring(left + 1, s.length);
      const rightsub = s.substring(0, right) + s.substring(right + 1, s.length);
      console.log(leftsub + '::' + rightsub);
      if (isPalindrome(leftsub) || isPalindrome(rightsub)) {
        return true;
      }
      return false;
    }
    left++;
    right--;
  }
  return true;
};
