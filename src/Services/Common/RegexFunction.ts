export function removeThePrefix(inputString:string) {
    if (inputString.startsWith("the_")) {
      return inputString.slice(4); // Removes the first 4 characters
    }
    return inputString; // Return as-is if it doesn't start with "the_"
}