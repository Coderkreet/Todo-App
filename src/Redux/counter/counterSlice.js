import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Changed from 'text' to 'tasks' which is an array
};

export const removeTask = (index) => ({
  type: 'counter/removeTask',
  payload: index,
});

export const setTasks = (tasks) => ({
  type: 'counter/setTasks',
  payload: tasks,
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update localStorage
    },
    // Reducer to handle removing a task
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update localStorage
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    updateTask: (state, action) => {
      const { index, text } = action.payload;
      state.tasks[index] = text;
    },
  },
});

export const { addTask ,updateTask  } = counterSlice.actions;

export default counterSlice.reducer;
