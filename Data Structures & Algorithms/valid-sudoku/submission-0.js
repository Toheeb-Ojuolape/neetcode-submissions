class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         // Create hash maps (objects) for rows, columns, and boxes
    let rows = Array.from({ length: 9 }, () => ({}));
    let cols = Array.from({ length: 9 }, () => ({}));
    let boxes = Array.from({ length: 9 }, () => ({}));

    // Loop through each cell in the grid
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j]; // Get the current number in the grid
            
            if (num !== '.') { // If it's not an empty cell
                
                // Calculate box index (which 3x3 box this cell belongs to)
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                // Check if the number is already in the row, column, or box
                if (rows[i]?.[num] || cols[j]?.[num] || boxes[boxIndex]?.[num]) {
                    return false; // Invalid if the number is already seen
                }

                // If not, remember this number in the row, column, and box

                rows[i][num] = true;
                cols[j][num] = true;
                boxes[boxIndex][num] = true;
            }
        }
    }
    return true; // If we never find a duplicate, the Sudoku is valid
    }
}
