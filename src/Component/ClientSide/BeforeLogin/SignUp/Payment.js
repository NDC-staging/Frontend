import React, {useContext } from "react";
import { Box, Typography, TextField, MenuItem, FormControlLabel, Radio, RadioGroup, Button, Grid } from "@mui/material";

import SignupContext from "../../../../Context/ClientSide/SignUp/SignupContext";

function Payment() {
    const {currentPosition, maxPosition,paymentData, setPaymentData, setCurrentPosition,setMaxPosition} = useContext(SignupContext)

    const handleChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if(currentPosition === maxPosition){
            setMaxPosition(maxPosition+1);
        }
        setCurrentPosition(currentPosition+1);
    };

    return (
        <Box sx={{ width: "100%", mx: "auto",}}>
            <Typography variant="h6" fontWeight="bold">Payment Information</Typography>

            <Typography variant="subtitle1" fontWeight="bold" mt={2}>Card Details *</Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Credit Card Number" name="creditCardNumber" value={paymentData.creditCardNumber} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="3-Digit CVV" name="cvv" value={paymentData.cvv} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth select label="Exp Date Month" name="expMonth" value={paymentData.expMonth} onChange={handleChange}>
                        {[...Array(12)].map((_, i) => (
                            <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth select label="Exp Date Year" name="expYear" value={paymentData.expYear} onChange={handleChange}>
                        {[...Array(10)].map((_, i) => (
                            <MenuItem key={i} value={2025 + i}>{2025 + i}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Billing Zipcode" name="billingZip" value={paymentData.billingZip} onChange={handleChange} />
                </Grid>
            </Grid>

            <Typography variant="body2" mt={2}>
            I authorize Nationwide Drug Centers to electronically debit my bank account according Business name to the terms outlined below. I acknowledge that electronic debits against my account must comply with United States law. This payment authorization is to remain in effect until, I notify Nationwide Drug Centers of its cancellation by giving written notce in enough time for the Business name business and receiving financial instruction to have a reasonable opportunity to act on it.
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" mt={2}>E-Check ACH *</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Account Number" name="accountNumber" value={paymentData.accountNumber} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Routing Number" name="routingNumber" value={paymentData.routingNumber} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Account Name" name="accountName" value={paymentData.accountName} onChange={handleChange} />
                </Grid>
            </Grid>

            <Typography variant="subtitle1" mt={2}>Account Type:</Typography>
            <RadioGroup row name="accountType" value={paymentData.accountType} onChange={handleChange}>
                <FormControlLabel value="saving" control={<Radio />} label="Saving" />
                <FormControlLabel value="checking" control={<Radio />} label="Checking" />
                <FormControlLabel value="consumer" control={<Radio />} label="Consumer" />
                <FormControlLabel value="business" control={<Radio />} label="Business" />
            </RadioGroup>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#003366", color: "#fff" }} onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Box>
    );
}

export default Payment;
