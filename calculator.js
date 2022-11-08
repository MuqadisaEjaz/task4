function Sum(a,b){
    return a+b;
}

function Subtract(a,b){
    return a-b;
}

function Multiply(a,b){
    return a*b;
}

function Divide(a,b){
    if(b==0){
        return "error"
    }
    return a/b;
}



function Floor(x)
 {
      
    return Math.floor(x);
  }
  
function Ceil(x)
 {
   return Math.ceil(x);
    
 }
  
  function power(x,y)
 {
    return Math.pow(x, y);  
 }

 function Round(x)
 {
    return Math.round(x)
 }
module.exports={Sum,Subtract,Multiply,Divide,Ceil,Floor,power,Round}