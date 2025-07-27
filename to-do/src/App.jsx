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

function App() {

  return (
    <>
      <TaskProvider>
        <EditProvider>
        <SearchTaskProvider>
            <Router>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/registration' element={<Home />} />
                <Route path='/today tasks' element={<TodayTasks />} />
                <Route path='/Add task' element={<AddTask />} />
                <Route path='/search task' element={<SearchTasks />} />
              </Routes>
            </Router>
            </SearchTaskProvider>
        </EditProvider>
      </TaskProvider>


    </>
  )
}

export default App
