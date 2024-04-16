import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { removeTask, updateTask } from '../Redux/counter/counterSlice'; // Import the updateTask action

const TaskList = () => {
  const tasks = useSelector((state) => state.counter.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [editedText, setEditedText] = useState('');

  // Function to handle task deletion
  const handleDelete = (index) => {
    dispatch(removeTask(index));
  };

  // Function to handle task editing
  const handleEdit = (text, index) => {
    setIsEditing(true);
    setCurrentTask(index);
    setEditedText(text);
  };

  // Function to handle task update
  const handleUpdate = () => {
    dispatch(updateTask({ index: currentTask, text: editedText }));
    setIsEditing(false);
  };

  return (
    <>
      <div className='flex flex-col gap-y-5'>
        {tasks.map((text, index) => (
          <div key={index} className='flex pl-5 pr-5 rounded-lg justify-around items-center border-2 min:h-[5rem] gap-x-5'>
            <p>{text}</p>
            <div className='flex gap-x-5'>
              <div className='w-[3rem] flex cursor-pointer justify-center rounded-full bg-[#212836] items-center h-[3rem]'
                   onClick={() => handleDelete(index)}>
                <RiDeleteBin6Line className='text-2xl' />
              </div>
              <div className='w-[3rem] flex cursor-pointer justify-center rounded-full bg-[#212836] items-center h-[3rem]'
                   onClick={() => handleEdit(text, index)}>
                <AiFillEdit className='text-2xl' />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
  <div className='fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center'>
    <div className='modal bg-[#364056] flex flex-col justify-center items-center h-[15rem] w-[25rem] p-4 rounded-lg shadow-lg'>
      <input
        className='border-2 bg-[#53607c]  border-gray-300 text-white p-2 rounded-md'
        type='text'
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <div className='flex justify-end gap-2 mt-4'>
        <button
          className='bg-[#90cdf4] text-white px-4 py-2 rounded-md hover:bg-blue-700'
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className='bg-[#53607c] text-white px-4 py-2 rounded-md hover:bg-red-700'
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default TaskList;
