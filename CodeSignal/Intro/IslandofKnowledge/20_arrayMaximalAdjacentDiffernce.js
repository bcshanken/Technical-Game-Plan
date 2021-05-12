function arrayMaximalAdjacentDifference(inputArray) {
    let max = 0;
    
    for (let i = 0;i<inputArray.length-1;i++){
        if(Math.abs(inputArray[i]-inputArray[i+1])>max){
            max = Math.abs(inputArray[i]-inputArray[i+1]);
        }
    }
return max;
}
