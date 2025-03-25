import React, { useContext } from "react";
import { TextField, Button, Box, Typography, Grid, Checkbox, FormControlLabel, Paper } from "@mui/material";

import SignupContext from "../../../../Context/ClientSide/SignUp/SignupContext";

function Submit() {
    const {submitFormData, setSubmitFormData,submitFormFunction} = useContext(SignupContext)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSubmitFormData({ ...submitFormData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSignature = () => {
        setSubmitFormData({ ...submitFormData, signature: "✓ Signed" });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        submitFormFunction();
    }

    return (
        <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", p: 3 }}>
            <Typography variant="h6" fontWeight="bold">Signature & Submission</Typography>

            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={6}>
                    <Typography fontWeight="bold">Business Owner Name *</Typography>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={submitFormData.firstName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={submitFormData.lastName}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{marginTop:'23px'}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography fontWeight="bold">Date *</Typography>
                    <TextField
                        type="date"
                        name="date"
                        value={submitFormData.date}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight="bold">Read carefully</Typography>
                    <Paper sx={{ p: 2, bgcolor: "#f5f5f5", height: 100, overflow: "auto", fontSize: 14 }}>
                        *By Signing below, individual/company agrees to authorize Nationwide Drug Centers to charge
                        credit card/debit payment (automatically if requested) or in full, including late fees 45 days past original billing date.
                        I also understand and authorize Nationwide Drug Centers to bill company or personal credit card or direct debit
                        on file to be charged without notice. Credit card is mandatory in order to open an account. You agree to auto-renewal
                        charges and cancellation may only be done via email notice 30 days before renewal.
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight="bold">Signature *</Typography>
                    <Button variant="contained" onClick={handleSignature}>Add Sign</Button>
                    {submitFormData.signature && (
                        <Typography sx={{ mt: 1, color: "green" }}>{submitFormData.signature}</Typography>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={submitFormData.agree} onChange={handleChange} name="agree" />}
                        label="Please ensure that all the information you have entered must be correct."
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" disabled={!submitFormData.agree} onClick={handleSubmit}>Sign up</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Submit;
