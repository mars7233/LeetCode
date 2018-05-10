// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
var num = [1, 2, 2]

var subsets = function (nums) {
    var res = new Array()
    var temp = new Array()
    DFS(res, nums, temp, 0)
    return res
}

function DFS(res, nums, temp, index) {
    if (index == nums.length) {
        var temp1 = temp.slice(0)
        res.push(temp1)
        return
    }

    temp.push(nums[index])
    DFS(res, nums, temp, index + 1)

    temp.pop()
    DFS(res, nums, temp, index + 1)

}
console.log(subsets(num))





