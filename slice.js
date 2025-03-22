// slice = The slice() method returns a shallow copy of a portion of an array into a new array,
//  without modifying the original array.

const numbers = [10, 20, 30, 40, 50];

const sliced = numbers.slice(1, 4);

console.log(sliced); 
console.log(numbers); 


//  The splice() method modifies an array by removing, replacing, or adding elements at a specified index. 
// Unlike slice(), splice() changes the original array.


const num = [10, 20, 30, 40, 50];

const removed = num.splice(1, 2); // Remove 2 ele from index 1

console.log(num); 
console.log(removed); 

// Slice-Does not change orginal array
// splice-change original array
