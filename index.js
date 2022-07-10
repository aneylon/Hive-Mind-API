const express = require("express");
const app = express();
const port = 3700;
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/hive-mind";

app.use(express.json());

const todoRoutes = require("./routes/todo");
app.use("/todo", todoRoutes);

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.get("/", (req, res) => {
  res.send(`Hive Mind API`);
});

app.listen(port, () => {
  console.log(`Hive Mind API running on port ${port}`);
});
