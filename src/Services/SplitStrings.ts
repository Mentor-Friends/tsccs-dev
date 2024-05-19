export  function SplitStrings(typeString: string)
{
    const pos = typeString.lastIndexOf("_");
    let SplittedStrings:string[] = [];
    if(pos > 0){
        var rest = typeString.substring(0, pos);
        var last = typeString.substring(pos + 1, typeString.length);
    
         SplittedStrings = [rest, last];
    }


    return SplittedStrings;
}