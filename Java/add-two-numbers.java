class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode resultNode = new ListNode(0);
        ListNode rotator = resultNode;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int l1Val = l1 != null ? l1.val : 0;
            int l2Val = l2 != null ? l2.val : 0;
            int sum = l1Val + l2Val + carry;
            carry = sum / 10;
            int value = sum % 10;
            ListNode nextNode = new ListNode(value);
            rotator.next = nextNode;
            rotator = rotator.next;
            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;

        }
        return resultNode.next;
    }
}