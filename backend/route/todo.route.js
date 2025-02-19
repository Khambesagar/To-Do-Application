import express from "express";
import { addTodo, getTodo , deleteTodo , updateTodo, getTodobyId } from "../controller/todo.controller.js";

const router = express.Router();

router.post('/add',addTodo);
router.get('/get',getTodo);
router.delete('/delete/:id',deleteTodo);
router.put('/update/:id',updateTodo);
router.get('/get/:id',getTodobyId);

export default router;