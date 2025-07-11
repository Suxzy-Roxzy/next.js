"use client";
import TodoComponent from "@/components/todo";
import TodoForm from "@/components/todoform";
import { useEffect, useState } from "react";

// const todos = [
//   {
//     id: 1,
//     title: "Learn Next.js",
//     description: "Understand the basics of Next.js",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Build a Todo App",
//     description: "Create a simple todo app using Next.js",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Deploy to Vercel",
//     description: "Deploy the app to Vercel for hosting",
//     completed: true,
//   },
// ];

export default function Home() {
  const [todolist, setTodolist] = useState([]);
  const [isediting, setIsediting] = useState(false);
  const [currenttodo, setCurrenttodo] = useState({
    id: "",
    title: "",
    description: "",
  });

  // CHECK IF ITEM ALREADY EXISTS
  const localStorageItems = (e) => {};

  // #Getting items from local storage and persisting them.
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved && saved !== "undefined") {
      setTodolist(JSON.parse(saved));
    }
  }, []);

  // Storing item into the local storage.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">
        Welcome to My Todo App
      </h1>
      {/* input form */}
      <TodoForm
        setTodolist={setTodolist}
        isediting={isediting}
        currenttodo={currenttodo}
        setIsediting={setIsediting}
        setCurrenttodo={setCurrenttodo}
      />

      {/* display */}
      {todolist.map((todo) => (
        <TodoComponent
          isediting={isediting}
          currenttodo={currenttodo}
          setIsediting={setIsediting}
          setCurrenttodo={setCurrenttodo}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}
