export function genHexString(len:number) {
    let output:number = 0;
    for (let i = 0; i < len; ++i) {
        output += (Math.floor(Math.random() * 16) * 16);
    }
    return -output;
}