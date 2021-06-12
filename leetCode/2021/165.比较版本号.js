/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.').map(val => parseInt(val))
  version2 = version2.split('.').map(val => parseInt(val))
  for(let i = 0; i < Math.max(version1.length, version2.length); i++){
    if(version1[i] == undefined) version1[i] = 0
    if(version2[i] == undefined) version2[i] = 0
    if(version1[i] < version2[i]) return -1
    else if(version1[i] > version2[i]) return 1
  }
  return 0
};
// @lc code=end

