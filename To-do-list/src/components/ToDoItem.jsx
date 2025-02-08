import { useState } from "react";

export default function ToDoItem({ task,number, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-3 shadow">
    <li className="flex justify-between items-center p-2 border-b">
    <span className="font-bold text-teal-700 mr-2">{number}.</span>
      {isEditing ? (
        <input 
          type="text" 
          className="border p-1 flex-1 font-bold" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span 
          className={`flex-1 ${task.completed ? 'line-through text-red-800' : ''}`}
          onClick={() => toggleComplete(task.id)}>
          {task.text} 
        </span>
      )}
      {task.completed && <span className="text-red-500"> (Done)</span>}
      {isEditing ? (
        <button className="bg-green-600 text-white p-1 ml-2" onClick={handleEdit}>
        save </button>
      ) : (
        <button className="text-green-700 p-1 ml-2"
         onClick={() => setIsEditing(true)}>
          <i className="fa fa-pen"></i>
          </button>
      )}
      <button className="text-red-600 p-1 ml-2" 
      onClick={() => deleteTask(task.id)}> 
      <i className="fa fa-trash"></i>
      </button>
    </li>
    </div>

  );
}