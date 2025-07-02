var removeElement = function (nums, val) {
  let nonVal = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[nonVal] = nums[i];
      nonVal++;
    }
  }
  return nonVal;
};

removeElement([3, 2, 2, 3], 3);
