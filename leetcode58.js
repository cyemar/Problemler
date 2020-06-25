//Input:"Hello World"
var lengthOfLastWord = function(s) {
    if(s === null || s.length === 0){
        return 0;
    }
    
    var sayim = 0;
    
    for(var i = s.length; i--;){
        if(s[i] === ' '){
            if(sayim === 0){
                continue;
            } else {
                return sayim;
            }
        }
        
        sayim++;
    }
    
    return sayim;
};