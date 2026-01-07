import { useState } from "react";


export default function App() {
  const [inputValue, setinputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [alertIsOpen, setAlertIsOpen] = useState(false)

  const addbtn = () => {
    if (inputValue === "") {
      alert("Enter a Task")
      return;
    }
    setTasks([...tasks, inputValue]);
    setinputValue("")
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
        <div className="flex space-y-3">
          {tasks.length === 0
            ?
            (<p className="text-gray-400 text-center italic flex-1">No tasks yet. Add one!</p>)
            :
            (
              tasks.map((task, index) => (
                <p 
                key={index}
                className="text-black  flex-1 bg-gray-100 py-3 px-4 rounded-lg">{task}</p>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}