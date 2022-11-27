class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 *
 * Recursive Solution
 *
 */
function getArrayFromNode(listNode: ListNode, arr: number[]) {
  const newArr = arr;
  newArr.push(listNode.val);
  if (listNode.next === null) {
    return newArr;
  }
  return getArrayFromNode(listNode.next, newArr);
}

function getNodeFromArray(arr: number[]) {
  const newArr = arr;
  const val = newArr.shift();
  if (newArr.length > 0) {
    return new ListNode(val, getNodeFromArray(newArr));
  }
  return new ListNode(val, null);
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const l1Number = Number(getArrayFromNode(l1, []).reverse().join(""));
  const l2Number = Number(getArrayFromNode(l2, []).reverse().join(""));
  if (l1Number + l2Number >= 1e30) {
    const l1BigInt = BigInt(getArrayFromNode(l1, []).reverse().join(""));
    const l2BigInt = BigInt(getArrayFromNode(l2, []).reverse().join(""));
    return getNodeFromArray(
      Array.from(String(l1BigInt + l2BigInt), Number).reverse()
    );
  }
  return getNodeFromArray(
    Array.from(String(l1Number + l2Number), Number).reverse()
  );
}
/**
 *
 * Iterative Solution
 *
 */

function addTwoNumbersIt(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1Node: ListNode | null = l1;
  let l2Node: ListNode | null = l2;
  let resultNode = new ListNode(0);
  let rotator = resultNode;
  let carry = 0;

  while (l1Node !== null || l2Node !== null || carry !== 0) {
    let l1Value = 0;
    let l2Value = 0;
    if (l1Node !== null) {
      l1Value = l1Node.val;
      l1Node = l1Node.next;
    }
    if (l2Node !== null) {
      l2Value = l2Node.val;
      l2Node = l2Node.next;
    }
    const sum = l1Value + l2Value + carry;
    carry = Math.trunc(sum / 10);
    const value = sum % 10;
    const nextNode = new ListNode(value);
    rotator.next = nextNode;
    rotator = rotator.next;
  }

  return resultNode.next;
}
