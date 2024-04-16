// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './Component/TaskInput'
import TaskList from './Component/TaskList'





function App() {
 

  return (
    <div className=' bg-[#1a202c] text-white p-4 flex flex-col justify-center items-center overflow-hidden'>
    <div className="h-[100vh] w-[100vw] flex-col flex justify-start pt-8 gap-y-6 items-center overflow-hidden">
    <h1 className='text-white font-bold text-4xl'>Tack List</h1>
  <p className='text-gray-500 font-bold' > {`"Track Your Life and Maintain Discipline with the Help of a Todo List"`} </p>
    <TaskInput/>
    <TaskList/>
    </div>
    </div>
  )
}

export default App
