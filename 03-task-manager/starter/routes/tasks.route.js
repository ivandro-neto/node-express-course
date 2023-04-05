const express = require('express')
const address = '/api/v1/tasks'
const 
{
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/tasks.controller")

const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = {router, address}

