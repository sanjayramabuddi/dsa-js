let arr = [1, 3, 5, 7, 8, 9, 2];

function sum(num) {
  if (num == 0) return arr[num];

  return arr[num] + sum(num - 1);
}

console.log(sum(arr.length - 1));
