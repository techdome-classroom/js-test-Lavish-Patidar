const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) {
    return 0;
}

const rows = grid.length;
const cols = grid[0].length;
let islands = 0;

const DepthFirstSearch = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 'L') {
        return;
    }

    grid[i][j] = '#'; 

    
    DepthFirstSearch(i + 1, j);
    DepthFirstSearch(i - 1, j);
    DepthFirstSearch(i, j + 1);
    DepthFirstSearch(i, j - 1);
};

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 'L') {
            DepthFirstSearch(i, j);
            islands++;
        }
    }
}

return islands;

};

module.exports = getTotalIsles;