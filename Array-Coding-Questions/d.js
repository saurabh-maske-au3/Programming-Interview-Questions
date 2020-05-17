
function solution(str) { 
    
     
     
     var count=0;
     var i=0;
    while(i<=str.length){
        if(i==0 &&  (parseInt(str.substring(0,1))%3==0) ){
            count++;
            i=2;
           
        }
        else if(parseInt(str.substr(1,i))%3==0){
            count++
            i++
        }
    }
    return count;
    } 
    console.log(solution("123"))