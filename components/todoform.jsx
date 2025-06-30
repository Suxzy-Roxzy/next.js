import React from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({
  setTodolist,
  isediting,
  setIsediting,
  currentTodo,
  setCurrentTodo,
}) => {
  // Function to reset all the states
  const resetStates = () => {
    setIsediting(false);
    setCurrentTodo({
      id: "",
      title: "",
      description: "",
      completed: false,
      createdAt: new Date().toISOString(),
    });
  };

  // State to update the todo list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isediting) {
      // Update existing todo
      setTodolist((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === currentTodo.id ? currentTodo : todo
        )
      );
    } else {
      // Add new todo
      const newTodo = {
        id: uuidv4(), // Generate a unique ID for the new todo
        title: currentTodo.title,
        description: currentTodo.description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodolist((prevTodos) => [newTodo, ...prevTodos]);
    }

    // Reset all the states after submission
    resetStates();
    toast.success(
      isediting ? "Todo updated successfully!" : "Todo added successfully!"
    );
  };

  const handleCancel = () => {
    resetStates();
    toast.error("Todo creation/editing cancelled.");
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
          value={currentTodo.title}
          onChange={(e) => {
            setCurrentTodo((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
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
          value={currentTodo.description}
          onChange={(e) => {
            setCurrentTodo((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
      >
        {isediting ? "Update Todo" : "Add Todo"}
      </button>

      {currentTodo.title || currentTodo.description ? (
        <button
          type="button"
          onClick={handleCancel}
          className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 cursor-pointer"
        >
          Cancel
        </button>
      ) : null}
    </form>
  );
};

export default TodoForm;
