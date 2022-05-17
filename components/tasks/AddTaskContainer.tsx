import { useState } from "react";

const AddTaskContainer = () => {
  const [task, setTask] = useState<string[]>([]);

  const handleInput = () => {
    console.log(task);
    localStorage.setItem('tasks', JSON.stringify(task));
  }

  return (
    <div className="mx-3 border-2 border-gray-300 rounded p-3">
      <div className="flex items-center space-x-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          onChange={(event) => setTask([...task, event.target.value])}
          placeholder="Task here.."
        />
        <svg
          onClick={handleInput}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddTaskContainer;
