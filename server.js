const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5001;

let visitors = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  visitors++;
  const date = new Date();
  res.send(
    `Current Time: ${date.toLocaleTimeString()}. Total Visitors: ${visitors}`
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
