class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
     convertToBinaryAndCountOne(num) {
    let binary = (num >>> 0).toString(2)
    let binArr = binary.split('')
    let count = 0
    let i = 0
    while (i < binArr.length) {
        if (binArr[i] == '1') {
            count++
        }
        i++
    }
    return count
}

countBits(n) {
    let result = new Array()
    for (let i = 0; i <= n; i++) {
        result.push(this.convertToBinaryAndCountOne(i))
    }

    return result
};
}
