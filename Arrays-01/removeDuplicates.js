var removeDuplicates = function (nums) {
  let uniq = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[uniq]) {
      uniq = uniq + 1;
      nums[uniq] = nums[i];
    }
  }
  return uniq + 1;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);