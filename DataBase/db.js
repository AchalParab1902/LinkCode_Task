const postgres=require('postgres');
require("dotenv").config();

const sql = postgres(process.env.PG_URL, {
  ssl: "require",
});

  sql`CREATE TABLE IF NOT EXIST users(age INTEGER ,name TEXT)`.then(res=>{
    console.log('users table created');
  }).catch(err=>{
    console.log(err);
    
  });


  sql`CREATE TABLE IF NOT EXISTS tasks (name TEXT)`
    .then((res) => {
      console.log("tasks table created");
    })
    .catch((err) => {
      console.log(err);
    });
module.exports=sql;
