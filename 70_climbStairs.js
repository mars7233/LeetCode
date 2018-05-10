// 备忘录法
var climbStairs = function (n) {
    if (n == 1 || n == 2) {
        return n
    } else {
        var arrList = [1, 2]
        return arr(n - 1, arrList)
    }
};

var arr = function (n, arrList) {
    if (arrList[n] != undefined) {
        return arrList[n]
    } else {
        arrList[n] = arr(n - 1, arrList) + arr(n - 2, arrList)
        return arrList[n]
    }
}

var i = climbStairs(3)
console.log(i)

// 动态规划法
var climbStairs = function (n) {
    if (n == 1 || n == 2) {
        return n
    } else {
        var arrList = [0, 1, 2]
        for (var i = 3; i <= n; i++) {
            arrList[i] = arrList[i - 1] + arrList[i - 2]
            // console.log(arrList[i])
        }
        return arrList[n]
    }
};
var i = climbStairs(4)
console.log(i)

// 状态压缩法(滑动窗口法)
var climbStairs = function (n) {
    if (n == 1 || n == 2) {
        return n
    } else {
        var a = 1
        var b = 2
        var t
        for (var i = 3; i <= n; i++) {
            t = a + b
            a = b
            b = t
        }
        return t
    }
};
var i = climbStairs(4)
console.log(i)