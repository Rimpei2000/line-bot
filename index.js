const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('app at port 5000');
})