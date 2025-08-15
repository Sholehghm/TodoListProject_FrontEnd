import React, { useEffect, useState } from 'react'
import Home from './components/routes/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AddTask from './components/routes/AddTask';
import { EditProvider } from './context/EditDialogContext';
import { TaskProvider } from './context/TaskContext';
import { SearchTaskProvider } from './context/SearchTaskContext';
import TodayTasks from './components/routes/TodayTasks';
import SearchTasks from './components/routes/SearchTask';
import RegisterForm from './components/routes/Registration';
import LoginForm from './components/routes/Login';

function App() {
  const [logedIn, setLogedIn] = useState(false);

  useEffect(()=>{
    const authToken = localStorage.getItem('authToken');
    if(authToken){
      setLogedIn(true);
    }
  })

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
                <Route path='/login' element={<LoginForm logedIn={logedIn} setLogedIn={setLogedIn} />} />
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
