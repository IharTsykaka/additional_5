module.exports = function check(str, bracketsConfig) {
    var brackets = [];
    var arr = [];
    for (var i = 0; i<bracketsConfig.length; i++) {
        brackets[i]= bracketsConfig[i].join('');
    }
    var flag = true;
    while (flag) {
        for(var j = 0; j < brackets.length; j++) {
            if(str.indexOf(brackets[j]) === -1) {
                arr.push(0);       
            } 
            else {
                str = str.replace(brackets[j],'');                
                arr.push(1);   
            } 
        }    
        if (arr.indexOf(1) === -1) {
            flag = false;
        }      
        arr = [];
    }
    if (str.length === 0){
        return true;
    }
      else {
        return false;
    }
}
