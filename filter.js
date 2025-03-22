// filter = The filter() method is used to create a new array containing only the elements that pass a certain condition 
const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10];

const evenNumbers = numbers.filter((num) => {
    if(num % 2 === 0)
        return true;
});
console.log("Even numbers are :");
console.log(evenNumbers);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddnum=num.filter((n)=>{
    if(n%2 !=0)
        return true;
});
console.log("Odd numbers are :");
console.log(oddnum);
