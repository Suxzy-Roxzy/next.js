import React from "react";

const TodoComponent = ({ task, description }) => {

  // // REMOVING ELEMENTS FROM THE DOM

  // const deleteComponent = () => {
  //   TodoComponent.
  // };

  

  return (
    <div className="my-3 w-[700px] mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-500">{task}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Mark as completed</label>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoComponent;
