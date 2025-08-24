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
import { DeleteProvider } from './context/DeleteDialogContext';

function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await logedInCheck();
        setUser(userData);
        setLogedIn(true);
      } catch (err) {
        setLogedIn(false);
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <div className='bg-[#fdf6e3] bg-[length:100%_2rem] bg-[repeating-linear-gradient(0deg,_#d1cfc7_0px,_#d1cfc7_1px,_#fdf6e3_1px,_#fdf6e3_2rem)]'>
      <TaskProvider>
        <EditProvider>
          <DeleteProvider>
            <Router>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/registration' element={<RegisterForm />} />
                <Route path='/login' element={<LoginForm logedIn={logedIn} setLogedIn={setLogedIn} setUser={setUser} />} />
                <Route path='/today-tasks' element={<TodayTasks />} />
                <Route path='/Add-task' element={<AddTask />} />
                <Route path='/search-task' element={<SearchTasks />} />
              </Routes>
            </Router>
          </DeleteProvider>
        </EditProvider>
      </TaskProvider>


    </div>
  )
}

export default App
