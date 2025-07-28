var addTwoNumbers = function (l1, l2) {
  let add = new ListNode();
  let addHead = add;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + (!carry ? 0 : carry);
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let final = new ListNode(digit);

    add.next = final;
    add = add.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return addHead.next;
};
