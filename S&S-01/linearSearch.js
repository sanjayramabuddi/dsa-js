let arr = [2, 1, 5, 3, 4, 10, 6, 7, 8];
let target = 10;

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return "Found";
  }
  return "Not found";
}

console.log(search(arr, target));
