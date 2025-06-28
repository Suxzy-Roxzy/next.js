import React from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({
  setTodolist,
  isediting,
  setIsediting,
  currenttodo,
  setCurrenttodo,
}) => {
  // Reset All States when a Function is fufilled
  const resetStates = () => {
    setIsediting(false)
    setCurrenttodo({
      id:"",
      title:"",
      description:""
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isediting) {
      // Update the Todo list
      setTodolist((prevTodos) =>
        prevTodos.map((todo) => {
          todo.id === currenttodo.id ? currenttodo : todo;
        })
      );
    } else {
      // Add item
      const newTodo = {
        id: uuidv4(),
        title: currenttodo.title,
        description: currenttodo.description,
        completed: false,
      };
      // todolist.push(newTodo);
      setTodolist((prevTodos) => [newTodo, ...prevTodos]);
      e.target.reset();
    }

    // Resets all states
    resetStates()
    // Pops up completed messages
    toast.completed(
      isediting
        ? "You Todo has been successfully added"
        : "Your Task has been successfully added!"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Task Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="description">
          Task Description
        </label>
        <textarea
          name="description"
          id="description"
          required
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
