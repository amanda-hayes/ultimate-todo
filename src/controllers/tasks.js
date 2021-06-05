const express = require("express");
const tasks = express.Router();
const Task = require("../models/taskModel");

// GET all
tasks.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one
tasks.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// CREATE one
tasks.post("/", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    completed: req.body.completed,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

tasks.patch("/:id", (req, res) => {});

tasks.delete("/:id", (req, res) => {});

module.exports = tasks;
