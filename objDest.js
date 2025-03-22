// obj destructuring =Object destructuring allows you to extract values from objects and assign them to variables in a concise way.


const person = {
  name: "Achal",
  age: 23,
  address:{
        city :"Pune"
  } 
};

const { name, age, address } = person;

console.log(name); 
console.log(age);
console.log(address); 
