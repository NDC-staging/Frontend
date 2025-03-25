import React, { useContext} from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

import SignupContext from "../../../../Context/ClientSide/SignUp/SignupContext";

function ContactInfo() {
    const {currentPosition, maxPosition,contactInfoData, setContactInfoData, setCurrentPosition,setMaxPosition} = useContext(SignupContext)
    const handleChange = (e) => {
        setContactInfoData({ ...contactInfoData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if(currentPosition === maxPosition){
            setMaxPosition(maxPosition+1);
        }
        setCurrentPosition(currentPosition+1);
    };

    return (
        <Box sx={{ width: "100%",mx: "auto"}}>
            <Typography variant="h6" fontWeight="bold">Contact Information</Typography>

            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={contactInfoData.firstName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={contactInfoData.lastName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone No"
                        name="phone"
                        value={contactInfoData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        name="email"
                        value={contactInfoData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary">
                        *By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={contactInfoData.password}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={contactInfoData.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" onClick={handleNext}>Next</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactInfo;
