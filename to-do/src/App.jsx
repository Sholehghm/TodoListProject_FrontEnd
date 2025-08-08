import React, { useState } from 'react'
import Home from './components/pages/Home'
import data from './mockdata/MockData.json'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AddTask from './components/pages/AddTask';
import { EditProvider } from './context/EditDialogContext';
import { TaskProvider } from './context/TaskContext';
import { SearchTaskProvider } from './context/SearchTaskContext';
import TodayTasks from './components/pages/TodayTasks';
import SearchTasks from './components/pages/SearchTask';
import RegisterForm from './components/pages/Registration';

function App() {

  return (
    <div className='bg-[#fdf6e3] bg-[length:100%_2rem] bg-[repeating-linear-gradient(0deg,_#d1cfc7_0px,_#d1cfc7_1px,_#fdf6e3_1px,_#fdf6e3_2rem)]'>
      <TaskProvider>
        <EditProvider>
        <SearchTaskProvider>
            <Router>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/registration' element={<RegisterForm />} />
                <Route path='/today-tasks' element={<TodayTasks />} />
                <Route path='/Add-task' element={<AddTask />} />
                <Route path='/search-task' element={<SearchTasks />} />
              </Routes>
            </Router>
            </SearchTaskProvider>
        </EditProvider>
      </TaskProvider>


    </div>
  )
}

export default App
