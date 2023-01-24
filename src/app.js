const express = require("express");
const app = express();
const router = require("./routes");

const PORT = 3000;

app.use("/api", router);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log("server up");
});
