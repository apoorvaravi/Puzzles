// Import stylesheets
import './style.css';

// Write Javascript code!
const element = document.getElementById('longestSubstring');
element.innerHTML = `<h1>LongestSubstring</h1>`;
element.onclick = () => (element.innerHTML = longestSubstring('au'));

const longestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let left = 0;
  let right = 0;
  let longest = 0;
  let hashmap = {};

  while (right < s.length) {
    const value = s[right];
    if (!hashmap[value]) {
      hashmap[value] = value;
      right++;
    } else {
      left++;
      right = left;
      hashmap = {};
    }
    longest = Math.max(right - left, longest);
  }
  return longest;
};
