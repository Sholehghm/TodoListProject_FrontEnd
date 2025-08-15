import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "../navbar/NavBar";
import { register } from "../../utils/authAPI";

const RegisterForm = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerError, setRegisterError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setRegisterError("confirm password is not correct!")
            throw new Error("confirm password is not correct!")}; 
        try { 
            const newUser = await register(email,password);
            console.log(newUser);
            setEmail('');
            setPassword('');
            window.location.href = '/login';
        } catch (error) {
            console.log(error);
           setRegisterError(error.response.data.error); 
        }
      
    };

    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />

                <div className="flex-1">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg p-8 w-full max-w-md">
                            <Typography variant="h5" className="!mb-6 text-center font-semibold">
                               please create an account
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
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                />
                                </Box>
                                <Typography variant="body2" color="red" >{registerError}</Typography>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                   Sign up
                                </Button>
                            </form>
                            <Typography variant="body2" className="mt-4 text-gray-600">
                                Already have an account?
                            <Link to='/login' className="text-blue-600"> login</Link>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;