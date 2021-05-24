function alphabeticShift(inputString) {
    let aplhabetPlus = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"];
    let outputString = "";
    
    for (let i = 0;i<inputString.length;i++){
       outputString += aplhabetPlus[aplhabetPlus.indexOf(inputString[i])+1];
    }
    
    return outputString
    }

    
    // Prompt Below

//     Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The resulting string after replacing each of its characters.