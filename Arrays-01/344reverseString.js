var reverseString = function (s) {
  let size = s.length;
  let num = Math.floor(size / 2);
  for (let i = 0; i < num; i++) {
    let temp = s[i];
    s[i] = s[size - 1 - i];
    s[size - 1 - i] = temp;
  }
};

reverseString(["h", "e", "l", "l", "o"]);
