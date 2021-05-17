function minesweeper(matrix) {
    var minCnt = [];
  
    for(var i=0; i < matrix.length; i++){
      minCnt.push([]);
      for(var j=0; j < matrix[i].length; j++){
            minCnt[i][j] = 0;
        if(i>0){
          if(matrix[i-1][j]){
            minCnt[i][j]++;
          }
          if(matrix[i-1][j+1]){
            minCnt[i][j]++;
          }
          if(matrix[i-1][j-1]){
            minCnt[i][j]++;
          }
        }
        if(i < matrix.length - 1){
          if(matrix[i+1][j]){
            minCnt[i][j]++;
          }
          if(matrix[i+1][j+1]){
            minCnt[i][j]++;
          }
          if(matrix[i+1][j-1]){
            minCnt[i][j]++;
          }
        }
  
        if(matrix[i][j+1]){
          minCnt[i][j]++;
        }
        if(matrix[i][j-1]){
          minCnt[i][j]++;
        }
      }
    }
    return minCnt;
  }