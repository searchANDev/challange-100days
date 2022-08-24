const nums = [45, 8, 98, 78, 45, 65, , 32, 12, 54]
const k = 88

class Solution {
  constructor(nums, k) {
    this.nums = nums
    this.k = k
  }
  solve() {
    let map = new Map()
    for (let item of this.nums) {
      if (map.has(this.k - item)) return true

      map.set(item)
    }

    return false
  }
}
let obj = new Solution(nums, k)
let result = obj.solve()
console.log(result)
