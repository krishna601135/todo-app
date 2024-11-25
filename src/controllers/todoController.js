import Todo from '../models/todoModel.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching to-dos', error: err.message });
  }
};

export const createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const todo = await Todo.create({ user: req.user.id, title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Error creating to-do', error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, completed },
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Error updating to-do', error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user.id });
    if (!todo) return res.status(404).json({ message: 'To-Do not found' });
    res.status(200).json({ message: 'To-Do deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting to-do', error: err.message });
  }
};

