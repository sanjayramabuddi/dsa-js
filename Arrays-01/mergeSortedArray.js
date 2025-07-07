var merge = function (nums1, m, nums2, n) {
  // approach 1
  //   let nums1copy = nums1.slice(0, m);
  //   let p1 = 0;
  //   let p2 = 0;

  //   for (let i = 0; i < m + n; i++) {
  //     if (p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
  //       nums1[i] = nums1copy[p1];
  //       p1++;
  //     } else {
  //       nums1[i] = nums2[p2];
  //       p2++;
  //     }
  //   }

  // approach 2
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
