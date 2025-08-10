import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "../navbar/NavBar";
import { register } from "../../utils/authAPI";

const LoginForm = () => {
    const [email, setEmail] =useState('');
    const [password, setPssword] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

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
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    className="!mb-2"
                                    value={password}
                                    onChange={(e)=>setPssword(e.target.value)}
                                />
                                </Box>
                                <Typography variant="body2" color="red" >Email or Password is not correct</Typography>
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