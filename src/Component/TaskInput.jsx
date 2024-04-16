import { useSelector, useDispatch } from 'react-redux';
import { addTask, setTasks } from '../Redux/counter/counterSlice'; // Import setTasks action
import { useEffect } from 'react';

const TaskInput = () => {
  const tasks = useSelector((state) => state.counter.tasks);
  const dispatch = useDispatch();

  // Load tasks from localStorage on initial load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      dispatch(setTasks(savedTasks)); // Dispatch an action to set tasks from localStorage
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handler function to dispatch the addTask action with the input value
  const handleInput = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTask(e.target.value));
      e.target.value = '';
    }
  };

  // New handler function for the button click event
  const handleClick = () => {
    const inputElement = document.querySelector('input[type="text"]');
    if (inputElement.value.trim() !== '') {
      dispatch(addTask(inputElement.value));
      inputElement.value = '';
    }
  };

  console.log(tasks);

  return (
    <div>
      <div className='flex flex-wrap gap-y-5 md:gap-x-4'>
        <input 
          onClick={handleInput} // Changed from onChange to onKeyPress
          type="text" 
          className='pl-3  h-[4rem]  text-[1.3rem] bg-[#212836] text-[#ffffff] w-[25rem] border-gray-400 rounded-lg' 
          placeholder='Enter Your Task' 
        />
        <button  
          onClick={handleClick} // Use the handleClick function for the onClick event
          className='h-[4rem] w-[8rem] rounded-lg hover:bg-[#64b5e7] text-black font-bold text-[1.1rem] bg-[#90cdf4]'
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
