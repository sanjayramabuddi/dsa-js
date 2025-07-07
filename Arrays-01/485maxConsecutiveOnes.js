var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    }
    if (currCount > maxCount) {
      maxCount = currCount;
    }
    if (nums[i] == 0) {
      currCount = 0;
    }
  }
  return maxCount;

  /* for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currCount++
        }
        else {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    } 
    return Math.max(currCount, maxCount); */
};
