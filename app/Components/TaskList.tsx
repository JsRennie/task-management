"use client";
import { useState } from "react";
import Task from "./Task";

type TaskItem = {
  id: string;
  description: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = () => {
    if (newTaskDescription.trim() !== "") {
      const newTask: TaskItem = {
        id: String(Date.now()),
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskDescription("");
    }
  };

  const editTask = (id: string, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="mr-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter task description"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          onEdit={editTask}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
