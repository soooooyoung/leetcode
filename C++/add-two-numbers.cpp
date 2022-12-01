#include <stdlib.h>

struct ListNode {
     int val;
     ListNode *next;
     ListNode() : val(0), next(nullptr) {}
     ListNode(int x) : val(x), next(nullptr) {}
     ListNode(int x, ListNode *next) : val(x), next(next) {}
 };

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* resultNode = new ListNode(0);
        ListNode* rotator = resultNode;
        int carry = 0;

        while (l1 != NULL || l2 != NULL || carry != 0) {
            int l1Value = 0;
            int l2Value = 0;
            if(l1 != NULL) {
                l1Value = l1->val;
                l1 = l1->next;
            }
            if(l2 != NULL) {
                l2Value = l2->val;
                l2 = l2->next;
            }

            int sum = l1Value + l2Value + carry;
            // decimal implicitly converted to the target type.
            carry = sum / 10;
            int value = sum % 10;
            ListNode* nextNode = new ListNode(value);
            rotator->next = nextNode;
            rotator = rotator->next;
        }
        return resultNode->next;   
    }
};