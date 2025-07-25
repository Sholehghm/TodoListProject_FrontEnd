import React, { useState } from 'react'
import Home from './components/pages/Home'
import data from './mockdata/MockData.json'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AddTask from './components/pages/AddTask';
import { EditProvider } from './context/EditDialogContext';
import { TaskProvider } from './context/TaskContext';

function App() {
 
  return (
    <>
    <TaskProvider>
    <EditProvider>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/registration' element={<Home />}/>
        <Route path='/today tasks' element={<Home />}/>
        <Route path='/Add task' element={<AddTask />}/>
        <Route path='/calendar' element={<Home />}/>
      </Routes>
    </Router>
    </EditProvider>
    </TaskProvider>
   
    
    </>
  )
}

export default App
