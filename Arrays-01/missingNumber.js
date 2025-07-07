var missingNumber = function (nums) {
  let size = nums.length;
  let totalCount = (size * (size + 1)) / 2;
  let currCount = 0;

  for (let i = 0; i < size; i++) {
    currCount = currCount + nums[i];
  }
  return totalCount - currCount;
};
