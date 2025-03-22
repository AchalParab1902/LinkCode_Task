// map = The map() method creates a new array by applying a given function to each element of an existing array. It does not modify the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squ = numbers.map((num) =>{
        return num*2;
    });
console.log(squ); 
