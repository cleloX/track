// // var checkOnesSegment = function(s) {
// //   let left = 0, right = s.length -1
// //   while(s[left] == '1') left++
// //   console.log(s[right == '0'])
// //   while(s[right] == '0') right--
// //   console.log(left, right)
// //   if(right < left) return true
// //   return false
// // };
// // console.log(checkOnesSegment('110'))

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @param {number} goal
//  * @return {number}
//  */
//   var minElements = function(nums, limit, goal) {
//     let sum = 0
//     nums.forEach(val => {
//       if(Math.abs(val) <= limit) sum += val
//     })
//     if(sum == goal) return 0
//     else if(sum < goal){
//       let res = 1
//       while(sum + limit * res < goal) res++
//       return res
//     }
//     else if(sum > goal){
//       while(sum - limit * res > goal) res++
//       return res
//     }

//   };



var countRestrictedPaths = function(n, edges) {
  let map = new Map()
  edges.forEach(arr => {
    if(map.has(arr[0])){
      let arrs = map.get(arr[0])
      arrs.push([arr[1], arr[2]])
      map.set(arr[0], arrs)
    }else{
      map.set(arr[0], [[arr[1], arr[2]])]
    }
  });

  let res = 0
  let mapKey = []
  for (const key in map) {
    mapKey.unshift(key)
  }

  for(let i=1;i<mapKey.length;i++){
    function get(){
      let mapVal = map.get(mapKey[i])
      mapVal.forEach(arr => {
        if(arr[0] != n) get()
      })
    }
    }
};