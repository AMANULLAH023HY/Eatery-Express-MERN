
const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

const connectionToDB = require('./db');
connectionToDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true  // Corrected typo here
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  