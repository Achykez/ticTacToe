export const checkHorizontal = (board: any[]) => {
    for (let row of board) {
      const rowSet = new Set(row);
      if (rowSet.size == 1 && !rowSet.has(undefined)) {
        return true;
      }
    }
  };
  
  export const checkVertical = (board: any[]) => {
    for (let col = 0; col < board[0].length; col++) {
      const colSet = new Set();
      for(let row = 0; row < board.length; row ++) {
        colSet.add(board[row][col])
      }
      if(colSet.size == 1 && !colSet.has(undefined)) {
        return true
      }
    }
  };
  
  export const checkDiagonal = (board: any[]) => {
    // Check main diagonal (top-left to bottom-right)
    const mainDiagonalSet = new Set();
    for (let i = 0; i < board.length; i++) {
      mainDiagonalSet.add(board[i][i]);
    }
    if (mainDiagonalSet.size === 1 && !mainDiagonalSet.has(undefined)) {
      return true; // Found a diagonal win
    }
  
    // Check anti-diagonal (top-right to bottom-left)
    const antiDiagonalSet = new Set();
    for (let i = 0; i < board.length; i++) {
      antiDiagonalSet.add(board[i][board.length - 1 - i]);
    }
    if (antiDiagonalSet.size === 1 && !antiDiagonalSet.has(undefined)) {
      return true; // Found a diagonal win
    }
  
    return false; // No diagonal win found
  }
  export const checkForWin = (board: any[]) => {
    ///horizontal
    if (checkHorizontal(board)) {
      return true;
    }
    ///vertical
    if (checkVertical(board)){
      return true;
    }
    ///diagonal
    if(checkDiagonal(board)) {
      return true;
    }
  
  };
  
  export function generateBoard(size: number) {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard.push([...Array(size)]);
    }
  
    return newBoard;
  }
  