export  function SplitStrings(typeString: string)
{
    const pos = typeString.lastIndexOf("_");
    let SplittedStrings:string[] = [];
    if(pos > 0){
        let rest = typeString.substring(0, pos);
        let last = typeString.substring(pos + 1, typeString.length);
    
         SplittedStrings = [rest, last];
    }
    else{
        SplittedStrings = [typeString];
    }


    return SplittedStrings;
}