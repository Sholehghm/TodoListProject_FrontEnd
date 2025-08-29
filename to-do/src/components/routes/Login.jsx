import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "../navbar/NavBar";
import { login,logedInCheck } from "../../utils/authAPI";
import Dashboard from "../dashbord/Dashbord";
import Loading from "../loading/Loading";
import { UseUser } from "../../context/UserContext";

const LoginForm = () => {
    const {email,setEmail,password,setPassword,logedIn,setLogedIn,setCheckLoading} = UseUser();
    const [logInError, setLogInError] = useState('');
    const [loginLoading,setLoginLoading]= useState(false);

    useEffect(()=>{
        setEmail('');
        setPassword('');
      const checklogedIn =async()=>{
        try {
            setCheckLoading(true);
            const userEmail = await logedInCheck();
            setLogedIn(true);
            setEmail(userEmail);
            } catch (error) {
              console.log(error);
              setLogedIn(false);
            } finally{
                setCheckLoading(false);
            }

      };

      
        checklogedIn(); 
    
     
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoginLoading(true);
            const user = await login(email, password);
            setEmail(user);
            setLogInError('');
            setLogedIn(true);
        } catch (error) {
            setLogInError(error.response.data.error);
        } finally {
            setLoginLoading(false);
        }
    };


    if (logedIn) {
        return (
            <div className="sm:flex sm flex-row ">
                <ResponsiveAppBar />
                <div className="flex-1">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                            <Dashboard></Dashboard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(!logedIn){
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
                                            onChange={(e) => {setEmail(e.target.value);
                                                console.log(email);
                                            }}
                                        />
                                        <TextField
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            className="!mb-2"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Box>
                                    {loginLoading ?
                                      <Loading/> : 
                                       <Typography variant="body2" color="red" >{logInError}</Typography> }
                                   
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        className="!bg-green-700"
                                    >
                                        Log in
                                    </Button>
                                </form>
                                <Typography variant="body2" className="!mt-2 text-gray-600 ">
                                    Don't have an accont?
                                    <Link to='/registration' className="text-blue-600">Sign up</Link>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
};

export default LoginForm;