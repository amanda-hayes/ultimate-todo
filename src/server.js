require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;
const taskController = require("./controllers/tasks");

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("disconnected", () =>
  console.log("Mongo disconnected. Nooooo!")
);
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is MongoDB not running?")
);
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose!");
});

app.use(express.json());
app.use("/tasks", taskController);

app.listen(3000, () => console.log("Server Running! Yay!"));
