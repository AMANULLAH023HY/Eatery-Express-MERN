
const express = require('express');
const app = express();

const port = 5000;

const connectionToDB = require('./db');
connectionToDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");

  res.header(
    "Access-control-Allow-Headers",
    "Origin,X-Requested-With. Content-Type, Accept"
  );
  next();
})


app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.use(express());
  app.use("/api", require("./Routes/CreateUser"))
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  