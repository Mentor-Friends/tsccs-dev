

/**
 * 
 * @param array1 The array you want to merge into
 * @param array2 The array you want to merge
 * @returns array1 with the elements of array 2
 */
export function MergeTwoArrays(array1:any, array2:any){
    if(Array.isArray(array1) && Array.isArray(array2)){
        for(let i=0; i<array2.length; i++){
            array1.push(array2[i]);
        }
    }

    return array1;
}