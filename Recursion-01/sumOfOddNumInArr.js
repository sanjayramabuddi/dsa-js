let arr = [1, 3, 5, 7, 8, 9, 2];

function sum(num) {
  let isOdd = arr[num] % 2 != 0;

  if (num == 0) return isOdd ? arr[num] : 0;
  return (isOdd ? arr[num] : 0) + sum(num - 1);
}

console.log(sum(arr.length - 1));
