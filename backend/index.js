
const express = require('express');
const app = express();

// const connectToMongoDB = require("./db");
// connectToMongoDB();
const port = 5000;

const connectionToDB = require('./db');
connectionToDB()


app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  