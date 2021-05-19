function variableName(name) {
    let nameArray = name.split("");
    let lettersString = "abcdefghijklmnopqrstuvwxyzv_";
    let charsString="abcdefghijklmnopqrstuvwxyz_0123456789";
    let lettersArray=lettersString.split("");
    let charsArray=charsString.split("");
    console.log(charsArray);
    if(lettersArray.indexOf(nameArray[0].toLowerCase())===-1){
        // console.log("first option")
        return false;
        
    };
    for (let i = 0;i<nameArray.length;i++){
        if(charsArray.indexOf(nameArray[i].toLowerCase())===-1){
            // console.log(nameArray[i]+" positiion number "+i)
        return false;}
    }
    return true
}
// Prompt Below

// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.