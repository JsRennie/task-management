"use client";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

type TaskProps = {
  id: string;
  description: string;
  completed: boolean;
  onEdit: (id: string, newDescription: string) => void;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

const Task = ({
  id,
  description,
  completed,
  onEdit,
  onDelete,
  onComplete,
}: TaskProps) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleEdit = () => {
    if (newDescription.trim() !== "") {
      onEdit(id, newDescription);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleComplete = () => {
    onComplete(id);
  };

  return (
    <div className="bg-white drop-shadow-xl rounded flex items-center my-2 px-3 py-4">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleComplete}
        className="mr-2"
      />
      <div className={`flex-grow ${completed ? "line-through" : ""}`}>
        {editing ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleEdit}
            className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span>{description}</span>
        )}
      </div>
      <button
        onClick={() => setEditing(true)}
        className="p-2 mr-2 rounded-md bg-slate-200"
      >
        <AiFillEdit color="green" size={20} />
      </button>
      <button onClick={handleDelete} className="p-2 rounded-md bg-slate-200">
        <AiFillDelete color="red" size={20} />
      </button>
    </div>
  );
};

export default Task;
