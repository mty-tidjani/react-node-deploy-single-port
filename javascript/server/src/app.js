const express = require("express");
const path = require('path');

const app = express();


const PORT = process.env.PORT || 4000;

app.get("/api/", function(req, res) {
  // Deal all API routes seperatly from client routes
  res.send("Hello World");
});

app.use(express.static(path.join(__dirname, '../clientbuild')));

app.get("*", function(req, res) {
  return res.sendFile(path.resolve(__dirname, '../clientbuild', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
