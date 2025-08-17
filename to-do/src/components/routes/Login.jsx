import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "../navbar/NavBar";
import { login,logedInCheck } from "../../utils/authAPI";
import Dashbord from "../dashbord/Dashbord";

const LoginForm = ({ logedIn, setLogedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPssword] = useState('');
    const [logInError, setLogInError] = useState('');

    const didRun = useRef(false);

    useEffect(()=>{

    if (didRun.current) return;
    didRun.current = true;

      const checklogedIn =async()=>{
        try {
            const userEmail = await logedInCheck();
            console.log(userEmail);
            setEmail(userEmail);
           
            } catch (error) {
              console.log(error);
              setLogedIn(false);
            }

      };

      if(logedIn){
        checklogedIn(); 
      }
     
    },[setLogedIn])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(email, password);
            localStorage.setItem('authToken', token.Token);
            setLogInError('');
            setLogedIn(true);
        } catch (error) {
            console.log(error.response.data.error);
            setLogInError(error.response.data.error);
        }
    };

    if (logedIn) {
        return (
            <div className="sm:flex sm flex-row ">
                <ResponsiveAppBar />
                <div className="flex-1">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                            <Dashbord email={email} setEmail={setEmail} setPassword={setPssword} setLogedIn={setLogedIn}></Dashbord>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />

                <div className="flex-1">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg p-8 w-full max-w-md">
                            <Typography variant="h5" className="!mb-6 text-center font-semibold">
                                Welcome back please log in
                            </Typography>
                            <form onSubmit={handleSubmit} className=" flex flex-col gap-4 space-y-4">
                                <Box >
                                    <TextField
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        className="!mb-2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        className="!mb-2"
                                        value={password}
                                        onChange={(e) => setPssword(e.target.value)}
                                    />
                                </Box>
                                <Typography variant="body2" color="red" >{logInError}</Typography>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Log in
                                </Button>
                            </form>
                            <Typography variant="body2" className="mt-4 text-gray-600">
                                Don't have an accont?
                                <Link to='/registration' className="text-blue-600">Sign up</Link>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;