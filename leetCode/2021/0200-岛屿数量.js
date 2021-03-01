/* 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numIslands = 0
  let row = col = 0
  function dfs(row, col){
    if(row >= grid.length || row < 0 || col < 0 || col >= grid[0].length || grid[row][col] == 0) return
    if(grid[row][col] == 1) grid[row][col] = 0
    dfs(row+1, col)
    dfs(row-1, col)
    dfs(row, col+1)
    dfs(row, col-1)
  }
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 1){
        dfs(i,j)
        numIslands++
      }
    }
  }
  return numIslands
};
console.log(numIslands([
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"],
]))