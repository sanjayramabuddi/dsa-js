let arr = [2, 11, 5, 3, 4, 10, 6, 7, 8];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count++;
      }
    }
    if (count == 0) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
