// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Solution -----------------------------------------------

var lengthOfLastWord = function (s) {
  let string = s.trim();
  string = string.split(" ");
  return string[string.length - 1].length;
};

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      ++count;
      --n;
    } else {
      break;
    }
  }
  return count;
};

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      ++count;
    } else if (count > 0) {
      break;
    }
    --n;
  }
  return count;
};
