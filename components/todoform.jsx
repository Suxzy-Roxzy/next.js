import React from "react";

const TodoForm = ({ setTodolist }) => {
  // State to update the todo list
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTodo = {
      id: Date.now(),
      title: formData.get("title"),
      description: formData.get("description"),
      completed: false,
    };
    // todolist.push(newTodo);
    setTodolist((prevTodos) => [...prevTodos, newTodo]);
    e.target.reset();
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
