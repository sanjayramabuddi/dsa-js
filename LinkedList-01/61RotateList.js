var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let first = head;
  let second = head;
  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;

  for (let i = 0; i < k; i++) {
    second = second.next;
  }

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  second.next = head;
  head = first.next;
  first.next = null;

  return head;
};
