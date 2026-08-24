class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length:9}, ()=>({}))
        let cols = Array.from({length:9}, ()=>({}))
        let boxes = Array.from({length:9},()=>({}))

        for(let i=0;i<9;i++){
            for(let j = 0;j<9;j++){
                let num = board[i][j]
                if(num !=='.'){
                    let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)

                if(rows[i][num] || cols[j][num] || boxes[boxIndex][num]){
                    return false
                }

                rows[i][num] = true
                cols[j][num] = true
                boxes[boxIndex][num] = true

                }
            }
        }
        return true
    }
}
