  const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("I am Use method");
    next();
    res.status(200).json({
        msg:"Use method "
    })
   
});

app.get("/login", (req, res, next) => {
  console.log("first Login api is called");

  res.status(200).json({
    msg: "Login api",
  });
});

app.post("/login", (req, res, next) => {
  console.log("second Login api is called");

  res.status(200).json({
    msg: "Hello World",
  });
});
app.listen(3000);
