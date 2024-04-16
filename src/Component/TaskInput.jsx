import { useSelector, useDispatch } from 'react-redux';
import { addTask, setTasks } from '../Redux/counter/counterSlice';
import { useEffect } from 'react';

const TaskInput = () => {
  const tasks = useSelector((state) => state.counter.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      dispatch(setTasks(savedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTask(e.target.value));
      e.target.value = '';
    }
  };

  const handleClick = () => {
    const inputElement = document.querySelector('input[type="text"]');
    if (inputElement.value.trim() !== '') {
      dispatch(addTask(inputElement.value));
      inputElement.value = '';
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <input 
        onKeyPress={handleInput}
        type="text" 
        className="pl-3 h-12 text-lg bg-gray-800 text-white w-full md:w-80 rounded-lg" 
        placeholder="Enter Your Task" 
      />
      <button  
        onClick={handleClick}
        className="h-12 w-full md:w-[10rem] rounded-lg hover:bg-blue-400 text-black font-bold text-lg bg-blue-300"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
