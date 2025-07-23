import React, { useState } from 'react'
import Home from './components/pages/Home'
import data from './mockdata/MockData.json'

function App() {
  const[tasks,setTask]=useState(data);
  return (
    <>
    <Home tasks={tasks}/>
    </>
  )
}

export default App
