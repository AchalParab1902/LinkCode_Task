const express=require('express');
const app=express();
app.get("/login/:name", (req, res, next) => {
  const name = req.params.name;

  const query = req.query;
  console.log(query);

  res.status(200).json({
    msg: "Hello " + name,
  });
});
app.get("/Addition",(req,res,next)=>{

    if(!(req.query.num1 && req.query.num2)){
        res.status(300).json({
            error:"Bad request",
            msg:"please enter num1 and num2"
        })
    }
    const total=parseInt(req.query.num1)+parseInt(req.query.num2);
    
    res.status(200).json({
        total:total
       
    });
});
app.use(express.json());
const tasks=[];
app.get('/tasks',(req,res,next)=>{
    res.status(200).json({
        tasks:tasks
    })
});
app.post("/task", (req, res, next) => {
    if(!(req.body.newTask)){
        res.status(400).json({
            msg:"please give task in newTask "
        });
        return;
    }
   tasks.push(req.body.newTask);
  res.status(200).json({
        msg:"Task added Successfully"
  });
});

app.delete("/task/:index",(req,res,next)=>{
    tasks.splice(req.params.index,1);
    res.status(204).json({
        msg:"Task Delete successfulyyy"
    })
});
app.listen(3000,()=>{
    console.log("server started at http localhost : 3000");
    
});
