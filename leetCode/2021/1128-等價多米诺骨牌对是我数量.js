var numEquivDominoPairs = function(dominoes) {
  let map = new Map()
  let num = 0
  dominoes.forEach(arr => {
    num = arr[0] > arr[1] ? arr[0] + arr[1] * 10 : 10 * arr[0] + arr[1]
    if(map.get(num)) map.set(num, map.get(num)+1)
    else map.set(num, 1)
  });
  let result = 0
  for(m of map){
    result += (m[1] - 1) * m[1] / 2
  }
  return result
};
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));