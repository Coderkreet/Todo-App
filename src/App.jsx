// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Card from "./Component/Card"
import NavBar from './Component/NavBar'
import { InputFild } from "./Component/InputFild"

function App() {
 

  return (
    <div className='Background  h-full'>
    <div className="w-11/12 justify-center items-center  overflow-hidden">
    <NavBar/>
  <div className='Container  '>
  
    <InputFild/>
    {/* <Card/> */}
  </div>    

    </div>
    </div>
  )
}

export default App
