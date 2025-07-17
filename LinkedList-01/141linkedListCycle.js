// using slow point and fast pointer
var hasCycle = function (head) {
    if (!head) return false;
    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// using hash map
var hasCycle = function (head) {
    let newNode = new Set();
    let curr = head;

    while (curr) {
        if (newNode.has(curr)) return true;
        newNode.add(curr);
        curr = curr.next;
    }
    return false;
};