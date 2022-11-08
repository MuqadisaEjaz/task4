function rString(string) {

    let rString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rString += string[i];
    }
    return rString;
}
module.exports=rString;