function leapyear(year){
    if(arguments.length===1)
    {
        if(Number.isInteger(year))
        {
            if(year%400===0){
                return true;
            }
            else{
                if(year%100!==0 && year%4===0){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        else{
            throw `Input is not number`  
        }
    }
    else{
        throw `Argument:Error`
    }
}
module.exports = leapyear