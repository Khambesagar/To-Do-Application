import ToDo from '../model/todo.model.js';

//Add todo 
export const addTodo = async (req, res) => {
    const { title, description, date,deadlines, status } = req.body;

    try {
        let addTodolist = await ToDo.create({
            title,
            description,
            date,
            deadlines,
            status
        });
        res.status(200).json({ message: "Todo add Successfully", addTodolist });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// Get Todo

export const getTodo = async (req, res) => {
    try {
        let getTodolist = await ToDo.find();
        res.status(200).json(getTodolist);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// app.get('/todo/get/:id', 
    export const getTodobyId =  async (req, res) => {
    const { id } = req.params;
    const todo = await ToDo.findById(id);  // Assuming MongoDB
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  };
  



// Delete Todo

export const deleteTodo = async (req, res) => {
    const id = req.params.id;

    try {
        let deleteTodoList = await ToDo.findByIdAndDelete(id);
        if (!deleteTodoList) {
            res.status(404).json('Todo not found');
        }
        res.status(200).json({ message: "Todo delete Successfully", deleteTodoList })
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//Update Todo

export const updateTodo = async (req, res) => {
    const id = req.params.id;

    try {
        let updateTodoList = await ToDo.findByIdAndUpdate(id, req.body);

        if (!updateTodoList) {
            res.status(404).json({ messsage: "Todo not found !", updateTodoList })
        }
        res.status(200).json({ message : "Todo update Successfully",updateTodoList});
    } catch (error) {
  res.status(500).json( error.message);
    }
};