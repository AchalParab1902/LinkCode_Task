function data(userId, callback) {
  console.log("User Id is : "+userId);
  const obj={
        name:'achal',
        age:23
  }
  callback(obj);
}
function processdata(obj){
    setTimeout(()=>{
console.log(obj.name);
    },2000);
    
}

data(101, processdata);
