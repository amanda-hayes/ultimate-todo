const taskModel = Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

module.exports = model("Task", taskModel);
