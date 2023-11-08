import React from 'react';

const TaskList = ({ tasks, onStatusUpdate, onDelete }) => {
  return (
    <ul className='rounded-md outline-none mr-4 h-full mt-4'>
      {tasks.map((task) => (
        <li key={task.id} >
          <h3 className='text-3xl mb-2'>{task.title}</h3>
          <p className='pl-4'>{task.description}</p>
          <select className='rounded-md pl-4 outline-none mt-8 p-2 w-1/4'
            value={task.status}
            onChange={(e) => onStatusUpdate(task.id, e.target.value)}

          >
            
            <option value="pending">Pending</option>
            <option value="working tasks">working tasks</option>
            <option value="Done">Done</option>
          </select>
          <button className='rounded-md text-center bg-blue-700 pl-4 pr-4 outline-none mt-4 ml-8 hover:bg-blue-400 p-2 h-full' onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
