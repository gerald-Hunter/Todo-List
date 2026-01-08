import { useState } from "react";


export default function App() {
  const [inputValue, setinputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const editTask = (indexToEdit) => {
    const newText = prompt("Edit your task:", tasks[indexToEdit]);

    // If they typed something and didn't hit cancel
    if (newText) {
      // .map() creates a new array just like .filter()
      const updatedTasks = tasks.map((task, index) =>
        index === indexToEdit ? newText : task
      );
      setTasks(updatedTasks);
    }
  };

  const addbtn = () => {
    if (inputValue === "") {
      alert("Enter a Task")
      return;
    }
    setTasks([...tasks, inputValue]);
    setinputValue("")
  }

  const deleteBtn = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks)
  }



  return (
    <div className="h-screen flex flex-col items-center bg-slate-50 py-12">
      <div className="w-full max-w-lg shadow rounded-xl p-5 bg-white border border-gray-100 space-y-5">
        <h1 className="text-2xl font-bold text-center">Todo List</h1>
        <div className="flex gap-2">
          <input
            onChange={(e) => setinputValue(e.target.value)}
            className="border border-gray-300 flex-1 rounded-lg px-4 py-2 focus: outline-0 ring-2 ring-blue-500"
            value={inputValue}
            type="text"
            name="" id="" />
          <button
            onClick={() => setinputValue(addbtn)}
            className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-800 ">
            Add
          </button>
        </div>
        <div className="space-y-3">
          {tasks.length === 0
            ?
            (<p className="text-gray-400 text-center italic flex-1">No tasks yet. Add one!</p>)
            :
            (
              tasks.map((task, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-300 ">
                  <span>{task}</span>
                  <div className="flex-items-center gap-5">
                    <button
                      onClick={() => editTask(index)}
                      className="text-blue-500 hover:bg-blue-100 px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBtn(index)}
                      className="text-red-500 hover:bg-red-100 px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )
          }
        </div>
        {tasks.length > 0 && (
          <div className="flex py-3 border-t border-gray-100 justify-between items-center">
            <p className="text-black text-sm">{tasks.length} tasks remaining</p>
            <button
              onClick={() => setTasks([])}
              className="text-red-500  hover:underline">Clear</button>
          </div>
        )}
      </div>
    </div>
  )
}