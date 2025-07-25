import React, { useState } from 'react'
import Home from './components/pages/Home'
import data from './mockdata/MockData.json'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AddTask from './components/pages/AddTask';

function App() {
  const[tasks,setTask]=useState(data);
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Home tasks={tasks}/>}/>
        <Route path='/home' element={<Home tasks={tasks}/>}/>
        <Route path='/registration' element={<Home tasks={tasks}/>}/>
        <Route path='/today tasks' element={<Home tasks={tasks}/>}/>
        <Route path='/Add task' element={<AddTask tasks={tasks}/>}/>
        <Route path='/calendar' element={<Home tasks={tasks}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
