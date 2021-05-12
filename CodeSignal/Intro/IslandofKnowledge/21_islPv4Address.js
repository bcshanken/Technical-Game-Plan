function isIPv4Address(inputString) {
    let inputArray= inputString.split(".");
    console.log(inputArray);
    if(inputArray.length!=4){
        return false;
    }
    for(let i=0;i<inputArray.length;i++){
        if(parseInt(inputArray[i])<0 || parseInt(inputArray[i])>255 || inputArray[i]==="" || isNaN(inputArray[i])){
            return false;
        };
    };
    
    for(let i=0;i<inputArray.length;i++){
        if(parseInt(inputArray[i])<10 && inputArray[i].length>1){
            return false;
            };
    }
    return true;
}
// Prompt Below

// isIPv4Address
// Codewriting

// 300

// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.

// There is no first number.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of digits, full stops and lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 30.

// [output] boolean

// true if inputString satisfies the IPv4 address naming rules, false otherwise.