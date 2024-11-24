export default function InsertUniqueNumber(
    Array: number[],
    toInsert: number,
  ): number[] {
    if (Array.indexOf(toInsert) === -1) {
      Array.push(toInsert)
    }
    return Array
  }
  