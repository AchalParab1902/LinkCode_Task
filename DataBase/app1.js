const express=require('express');
const sql=require('./db.js');


const app=express();

app.use(express.json());
const tasks=[];

const  getTasks=async()=> {
  const tasks = await sql`select * from tasks`;

  return tasks;
}
app.get('/tasks',async(req,res,next)=>{
    const tasks=await getTasks();
    res.status(200).json({
        tasks:tasks
    });
});
app.post("/task", async(req, res, next) => {
    try {
        if (!req.body.newTask) {
          res.status(400).json({
            msg: "please give task in newTask ",
          });
          return;
        }
        await sql`INSERT INTO tasks (name) VALUES (${req.body.newTask})`;

        res.status(200).json({
          msg: "Task added Successfully",
        });
        
    } catch (error) {
         res.status(500).json({
           msg: "something went wrong",
           error:error
         });
    }
    
});

app.delete("/deltask/:index", async (req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index)) {
    return res.status(400).json({
         msg: "Invalid index"
         });
  }

  try {
    await sql`DELETE FROM tasks WHERE "index" = ${index}`;

    res.status(200).json({ 
        msg: "Task deleted successfully"
     });
  } catch (error) {
    res.status(500).json({
         msg: "Something went wrong",
         error: error 
        });
  }
});

app.put("/updatetasks/:index", async(req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index)) {
    return res.status(400).json({
         msg: "Invalid index"
         });
  }

  try {
    await sql`UPDATE tasks SET name = ${newTask} WHERE id = ${index}`;

    res.status(200).json({ 
        msg: "Task deleted successfully"
     });
  } catch (error) {
    res.status(500).json({
         msg: "Something went wrong",
         error: error 
        });
  }
});


app.listen(3000,()=>{
    console.log("server started at http localhost : 3000");
    
});

