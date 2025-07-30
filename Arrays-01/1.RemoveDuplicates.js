// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Solution -------------------------------------------------------

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

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
