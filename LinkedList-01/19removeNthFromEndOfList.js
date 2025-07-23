// Two Pass
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }

  let prevPos = length - n;
  let prev = sentinel;

  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};

// One Pass
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let first = sentinel;
  let second = sentinel;

  for (let i = 0; i < n; i++) {
    second = second.next;
  }

  while (second && second.next) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;
  return sentinel.next;
};
