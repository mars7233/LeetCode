// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

var num = [1, 2, 2]
var subsetsWithDup = function (nums) {
    nums = nums.sort()
    var res = new Array()
    var temp = new Array()
    DFS(res, nums, temp, 0)
    return res
}

function DFS(res, nums, temp, index) {
    if (index == nums.length) {
        var temp1 = temp.slice(0)
        // var res1 = res.slice(0)
        var flag = true
        for (var i = 0; i < res.length; i++) {
            if (isEquals(temp1, res[i])) {
                flag = false
            }
        }
        if (flag == true) {
            res.push(temp1)
        }
        i++
        return
    }

    temp.push(nums[index])
    DFS(res, nums, temp, index + 1)

    temp.pop()
    DFS(res, nums, temp, index + 1)

}

var isEquals = function (array1, array2) {
    if (array1.length != array2.length)
        return false;
    for (var i = 0, l = array1.length; i < l; i++) {
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (!array1[i].equals(array2[i]))
                return false;
        }
        else if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

console.log(subsetsWithDup(num))