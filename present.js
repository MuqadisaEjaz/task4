function Present(x){
    const array=[1,2,3,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    var isPresent=false;

    for(let i=0; i<array.length;i++){
        if(array[i]===x){
            isPresent=true;
            break;
        }
    }

    return isPresent
}
module.exports=Present;