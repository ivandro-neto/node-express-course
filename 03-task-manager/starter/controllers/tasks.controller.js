const Task = require("../models/task.model");
const asyncWapper = require("../middleware/async.middleware");
const { createCustomError } = require("../errors/custom-error.error");

const getAllTasks = asyncWapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ status: "success", data: { tasks } });
});

const getTask = asyncWapper(async (req, res, next) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOne({ _id: TaskID });
  if (!task) return next(createCustomError(`No task with id : ${TaskID}`, 404));
  res.status(200).json({ status: "success", data: { task } });
});

const createTask = asyncWapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", data: { task } });
});

const updateTask = asyncWapper(async (req, res) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) return next(createCustomError(`No task with id : ${TaskID}`, 404));

  res.status(200).json({ status: "success", data: { task } });
});
const deleteTask = asyncWapper(async (req, res) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: TaskID });

  if (!task) return next(createCustomError(`No task with id : ${TaskID}`, 404));

  res.status(200).json({ status: "success", data: { task } });
});

/* 
        app.delete /api/v1/tasks/:id - delete a task */

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
