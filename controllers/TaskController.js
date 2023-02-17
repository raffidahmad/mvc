const taskService = require("../services/TaskService");
 
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json({ data: tasks, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createTask = async (req, res) => {
  try {
    const blog = await taskService.createTask(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getTaskById = async (req, res) => {
  try {
    const blog = await taskService.getTaskById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateTask = async (req, res) => {
  try {
    const blog = await taskService.updateTask(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteTask = async (req, res) => {
  try {
    const blog = await taskService.deleteTask(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};