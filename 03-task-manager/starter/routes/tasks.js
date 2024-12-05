const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllCompletedTasks,
  getAllIncompletedTasks,
} = require("../controllers/tasks");

router.route("/completed").get(getAllCompletedTasks);
router.route("/incompleted").get(getAllIncompletedTasks);
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
