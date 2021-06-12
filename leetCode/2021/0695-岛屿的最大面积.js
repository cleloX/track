// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
   if(grid.length == 0) return 0
   let max = 0
   let num = 0
   function getter(x,y){
    if(grid[x][y] == 0) return
     if(grid[x][y] == 1) num++
     grid[x][y] = 0
     if(grid[x-1]) getter(x-1, y)
     if(grid[x+1]) getter(x+1, y)
     if(grid[x][y-1]) getter(x, y-1)
     if(grid[x][y+1]) getter(x, y+1)
   }
   for(let i = 0; i < grid.length; i++){
     for(let j = 0; j < grid[0].length; j++){
       num = 0
       getter(i,j)
       if(num > max) max = num
     }
   }
   return max
};