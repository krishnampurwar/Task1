const { Router } = require('express');
const task = require('../controllers/taskController')

const router = Router();

router.get("/tasks", task.getTasks);

router.get("/tasks/:id", task.getTask);

router.post("/tasks", task.createTask);

router.put("/tasks/:id", task.updateTask);

router.delete("/tasks/:id", task.delelteTask);

module.exports =  router;