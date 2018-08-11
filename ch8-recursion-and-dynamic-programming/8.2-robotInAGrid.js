/*
Design an algorithm to find (all) paths for the robot from the top left to the bottom right

** Simplify the problem a bit by first figuring out if there's a path.
   Then modify your algorithm to track the path

the output is the coordinates for each correct step


*/


const robotGrid = function(grid) {
  let paths = [];
  let lastRow = grid.length - 1;
  let lastCol = grid[0].length - 1;

  let recurse = function(row, col, current) {
    if (row === lastRow && col === lastCol) {
      paths.push(current.concat([[row, col]]));
    } else if (row <= lastRow && col <= lastCol) {
      if (row < lastRow && grid[row+1][col] !== 'x') {
        recurse(row + 1, col, current.concat([[row, col]]));
      }
      if (col < lastCol && grid[row][col+1] !== 'x') {
        recurse(row, col + 1, current.concat([[row, col]]));
      }
    }
  };
  recurse(0, 0, []);
  console.log('paths: ', paths.length);
  return paths;

}


var grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
  ['0', '0', '0', '0']
];

console.log(robotGrid(grid));


// memoize

function paths(r, c) {
  r--;
  c--;
  let cache = [];

  function check(x, y) {
    if (x === c || y === r) {
      return 1;
    }

    if (!cache[x]) {
      cache[x] = [];
    }
    if (!cache[x + 1]) {
      cache[x + 1] = [];
    }

    if (!cache[x + 1][y]) {
      cache[x + 1][y] = check(x + 1, y);
    }
    if (!cache[x][y + 1]) {
      cache[x][y + 1] = check(x, y + 1);
    }

    return cache[x + 1][y] + cache[x][y + 1];
  }

  return check(0, 0);
}

console.log(paths(4, 4));