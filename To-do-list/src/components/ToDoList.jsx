import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul className="max-w-md mx-auto bg-gray-100 p-4 rounded shadow">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <ToDoItem 
            key={task.id} 
            task={task} 
            number={index + 1} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask} 
            editTask={editTask} 
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks</p>
      )}
    </ul>
  );
}