import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="max-w-md mt-10 mx-auto bg-teal-500 p-4 rounded shadow">
        <div className="flex gap-2">
          <input
            type="text"
            className="border p-2 flex-1 bg-white rounded-md"
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button className="bg-white text-teal-500 font-bold p-2 rounded-md" onClick={addTask}>Add</button>
        </div>
        </div>
  
        <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}