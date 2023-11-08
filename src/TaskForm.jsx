import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !description) {
      setError("Title and Description are required.");
      return;
    } else onSubmit({ title, description, status });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        className="rounded-md text-center outline-none mt-4 mr-4 pt-2 pb-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setError("");
          setTitle(e.target.value);
        }}
        required
      />
      <input
        className="rounded-md text-center outline-none mt-4 mr-4 pt-2 pb-2"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setError("");
          setDescription(e.target.value);
        }}
        required
      />
      <select
        className="rounded-md text-center outline-none mt-4 pt-2 pb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="select states" required>
          Select States
        </option>
        <option value="pending">Pending</option>
        <option value="working tasks">working tasks</option>
        <option value="Done">Done</option>
      </select>
      <p className="text-red-400">{error}</p>
      <button
        onClick={handleSubmit}
        className="rounded-md text-center bg-blue-700 pl-4 pr-4 outline-none mt-4 ml-4 hover:bg-blue-400 pt-2 pb-2"
      >
        Create Task
      </button>
    </div>
  );
};

export default TaskForm;
