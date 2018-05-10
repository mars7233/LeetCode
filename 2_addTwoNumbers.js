// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

function ListNode(val) {
    this.val = val
    this.next = null;
}
var l1 = new ListNode(9)
l1.next = new ListNode(9)
l1.next.next = new ListNode(9)

var l2 = new ListNode(9)
l2.next = new ListNode(9)
l2.next.next = new ListNode(9)

var addTwoNumbers = function (l1, l2) {
    var tempNode = new ListNode()
    var resNode = new ListNode()
    var carry = 0
    var res = []
    resNode = tempNode
    tempNode.val = 0

    while (l1 != null || l2 != null || carry == 1) {
        carry = 0
        var l1Val, l2Val

        // 如果l1或l2为空，则l1或l2为0
        l1 == null ? l1Val = 0 : l1Val = l1.val
        l2 == null ? l2Val = 0 : l2Val = l2.val

        tempNode.val = tempNode.val + l1Val + l2Val

        // 如果进位、则减10
        if (tempNode.val >= 10) { tempNode.val = tempNode.val - 10; carry = 1 }

        // 如果l1或l2为空，则无next
        l1 != null ? l1 = l1.next : l1 = null
        l2 != null ? l2 = l2.next : l2 = null

        var p = new ListNode(0)

        // 如果进位，则下一位加一
        if (carry == 1) p.val = 1

        p.next = null
        tempNode.next = p
        tempNode = p

    }
    // 输出数组
    while (resNode != null) {
        var temp = resNode.val
        if (temp == 0 && resNode.next == null) {
            return res
        } else {
            res.push(temp)
        }
        resNode = resNode.next
    }
    return res
}

console.log(addTwoNumbers(l1, l2))