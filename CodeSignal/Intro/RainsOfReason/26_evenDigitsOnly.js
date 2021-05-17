function evenDigitsOnly(n) {
    let inputArray = n.toString().split("");
    console.log(inputArray);
    let evenCount = 0;
    for( let i=0;i<inputArray.length;i++){
        if(inputArray[i]%2!=0){
            return false
        } else {evenCount++}
    }
    return evenCount=inputArray.length ? true:false;
   }

//    Prompt Below

// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.