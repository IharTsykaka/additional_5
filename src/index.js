module.exports = function check(str, bracketsConfig) {
    let newConfig = [];
    let arrStr =str.split("");
    let sum = 0;
    
    for (let i = 0; i < bracketsConfig.length; i++) {
        newConfig[i] = bracketsConfig[i].join("");

        if (isNumeric(newConfig[i]) && isNumeric(str)) {
            for (let j = 0; j < arrStr.length; j++) {
                sum += arrStr[j];
                if (sum % 2 === 0) return true;
                // if (sum % 2 !== 0) return false;
            }
        }

        if (newConfig[i] === "()" && str.indexOf("()") !== -1) {            
            for (let j = 0; j < arrStr.length; j++) {                
                if (arrStr[j] === "(") sum++;
                if (arrStr[j] === ")") sum--;                
                if (sum < 0) return false;
            }           
        }
        if (newConfig[i] === "[]" && str.indexOf("[]") !== -1) {           
            for (let j = 0; j < arrStr.length; j++) {
                if (arrStr[j] === "[") sum++;
                if (arrStr[j] === "]") sum--;                
                if (sum < 0) return false;
            }           
        }
        if (newConfig[i] === "{}" && str.indexOf("{}") !== -1) {            
            for (let j = 0; j < arrStr.length; j++) {
                if (arrStr[j] === "{") sum++;
                if (arrStr[j] === "}") sum--;               
                if (sum < 0) return false;
            }           
        }
        if (newConfig[i] === "||" && str.indexOf("||" !== -1)) {
            for (let j = 0; j < arrStr.length; j++) {
                if (arrStr[j] === "|") sum++;                
            }
            if (sum % 2 === 0) return true;
            if (sum % 2 !== 0) return false;
        }        
        if (str.indexOf("()") === -1 &&
        str.indexOf("[]") === -1 &&
        str.indexOf("{}") === -1 &&
        str.indexOf("||" !== -1)) return false;

    } 
    if (sum === 0) return true;
    if (sum !== 0) return false;       
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
        
       
            // if (newConfig[i] === "12" && str.indexOf("12") !== -1) {
            //     for (let j = 0; j < arrStr.length; j++) {
            //         if (arrStr[j] == "1" || arrStr[j] == "2") sum++;
            //         if (sum%2 == 0) return true;                                 
            //     }                               
            // }
            // if (newConfig[i] === "34" && str.indexOf("34") !== -1) {
            //     for (let j = 0; j < arrStr.length; j++) {
            //         if (arrStr[j] == "3" || arrStr[j] == "4") sum++;
            //         if (sum%2 == 0) return true;                                 
            //     }
            // }
            // if (newConfig[i] === "56" && str.indexOf("56") !== -1) {
            //     for (let j = 0; j < arrStr.length; j++) {
            //         if (arrStr[j] == "5" || arrStr[j] == "6") sum++;
            //         if (sum%2 == 0) return true;                                 
            //     }
            // }
            // if (newConfig[i] == "77" && str.indexOf("77") !== -1) {
            //     for (let j = 0; j < arrStr.length; j++) {
            //         if (arrStr[j] == "7") sum++;
            //         if (sum%2 ==0) return true;                                 
            //     }
            // }
            // if (newConfig[i] == "88" && str.indexOf("88") !== -1) {
            //     for (let j = 0; j < arrStr.length; j++) {
            //         if (arrStr[j] == "8") sum++;
            //         if (sum%2 == 0) return true;                                
            //     } 
            // }
            
            
            
        
    