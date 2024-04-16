import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

const preloadedState = {
  counter: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [] // Load tasks or default to an empty array
  }
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState,
})