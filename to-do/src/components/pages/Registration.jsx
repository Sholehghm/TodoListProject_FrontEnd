import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import ResponsiveAppBar from "../navbar/NavBar";

const RegisterForm = () => {
    const [mode, setMode] = useState('sign in');
    const handleMode = (currentMode) => { currentMode === 'sign in' ? setMode('sign up') : setMode('sign in') }
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission logic
    };

    return (
        <>
            <div className='sm:flex sm:flex-row '>
                <ResponsiveAppBar />

                <div className="flex-1">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg p-8 w-full max-w-md">
                            <Typography variant="h5" className="!mb-6 text-center font-semibold">
                                {mode === 'sign in' ? 'Welcome back please log in' : 'please create an account'}
                            </Typography>
                            <form onSubmit={handleSubmit} className=" flex flex-col gap-4 space-y-4">
                                <Box display="flex" gap={2}>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        className={mode === 'sign in' ? '!hidden' : ''}
                                    />
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        className={mode === 'sign in' ? '!hidden' : ''}
                                    />
                                </Box>
                                <Box >
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    className="!mb-2"
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    className="!mb-2"
                                />
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    className={mode === 'sign in' ? '!hidden' : ''}
                                />
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    {mode === 'sign in' ? 'Log in' : 'Sign up'}
                                </Button>
                            </form>
                            <Typography variant="body2" className="mt-4 text-gray-600">
                                {mode === 'sign in' ? 'Don\'t have an accont?' : 'Already have an account'}
                                <a onClick={() => handleMode(mode)} className="mt-4 text-center text-blue-500">
                                    {mode === 'sign in' ? 'Sign Up' : 'Sign In'}
                                </a>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;