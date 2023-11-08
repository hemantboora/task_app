// App.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };
   
  const updateStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className='flex flex-col items-center bg-blue-100 h-full'>
    <div className='flex flex-col w-1/2'>
      <h1 className='text-center text-4xl'>Task Management App</h1>
      <TaskForm onSubmit={addTask} />
      <select className='rounded-md pl-4 outline-none mt-8 p-2 w-1/2' value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All" className=''>filter the tasks on based of states</option>
        <option value="pending">Pending</option>
        <option value="working tasks">working tasks</option>
        <option value="Done">Done</option>
      </select>
      <TaskList tasks={filteredTasks} onStatusUpdate={updateStatus} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import './App.css'; // You can use Tailwind CSS classes or other styling approaches

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState({ title: '', description: '', status: 'To Do' });
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleAddTask = () => {
//     if (!task.title || !task.description) {
//       setError('Title and Description are required.');
//       return;
//     }

//     setTasks([...tasks, task]);
//     setTask({ title: '', description: '', status: 'To Do' });
//     setError('');
//   };

//   const handleUpdateStatus = (index, newStatus) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].status = newStatus;
//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold my-4">Task Management</h1>

//       {/* Task Creation Form */}
//       <div>
//         <input
//           type="text"
//           name="title"
//           value={task.title}
//           onChange={handleInputChange}
//           placeholder="Title"
//         />
//         <textarea
//           name="description"
//           value={task.description}
//           onChange={handleInputChange}
//           placeholder="Description"
//         />
//         <select name="status" value={task.status} onChange={handleInputChange}>
//           <option value="To Do">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Done">Done</option>
//         </select>
//         <button onClick={handleAddTask}>Add Task</button>
//         <p className="text-red-500">{error}</p>
//       </div>

//       {/* Task List */}
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <span>{task.title}</span>
//             <span>{task.description}</span>
//             <span>{task.status}</span>
//             <button onClick={() => handleUpdateStatus(index, 'To Do')}>To Do</button>
//             <button onClick={() => handleUpdateStatus(index, 'In Progress')}>In Progress</button>
//             <button onClick={() => handleUpdateStatus(index, 'Done')}>Done</button>
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
