/**
 * 
 * @param ms The time required to wait before executing this function
 * @param callback This is the function that needs to be executed
 * @returns returns a promise for the resolve
 */
export function DelayFunctionExecution(ms:number, callback: any){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve(callback);
        }, ms);
    });
}