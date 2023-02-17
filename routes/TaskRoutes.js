const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");
 
const router = express.Router();
 
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);
 
module.exports = router;