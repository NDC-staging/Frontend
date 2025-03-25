import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const isFormValid = email && !emailError && password;

    return (
        <Box sx={{ marginTop: '90px' }}>
            <Container maxWidth="xs" sx={{ minHeight: `calc(100vh - 220px)`, alignContent: 'center' }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 8,
                        p: 3,
                        boxShadow: 3,
                        borderRadius: 2,
                        bgcolor: "background.paper",
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Log in
                    </Typography>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailError ? "Enter a valid email address" : ""}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} disabled={!isFormValid}>
                        Log in
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 1 }}>
                        <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                                Forgot password?
                            </Typography>
                        </Link>
                        <Link to="/pricing" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                                Sign up
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Login;