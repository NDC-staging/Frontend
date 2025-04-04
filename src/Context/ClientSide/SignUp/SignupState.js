import { useState } from "react";
import axios from "axios";
import SignupContext from "./SignupContext"

const SignupState = (props) => {
    const [currentPosition, setCurrentPosition] = useState(1);
    const [maxPosition, setMaxPosition] = useState(1);

    const [selectedPlan, setSelectedPlan] = useState(1);

    const [contactInfoData, setContactInfoData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [companyInfoData, setCompanyInfoData] = useState({
        companyName: "",
        usdot: "",
        contactNumber: "",
        companyEmail: "",
        safetyAgencyName: "",
        employees: "",
        address: "",
        suite: "",
        city: "",
        state: "",
        zip: "",
    });

    const [paymentData, setPaymentData] = useState({
        creditCardNumber: "",
        cvv: "",
        expMonth: "",
        expYear: "",
        billingZip: "",
        accountNumber: "",
        routingNumber: "",
        accountName: "",
        accountType: "saving",
    });

    const [submitFormData, setSubmitFormData] = useState({
        firstName: "",
        lastName: "",
        date: new Date().toISOString().split("T")[0], // Default to today's date
        signature: "",
        agree: false,
    });

    const submitFormFunction = async () => {
        try {
            const API_URL = "http://localhost:8000/api";
            const fullData = {
                selectedPlan,
                contactInfoData,
                companyInfoData,
                paymentData,
                submitFormData,
            };
            const response = await axios.post(`${API_URL}/loginAndSignUp/signup`, fullData, {
                headers: {
                    "Content-Type": "application/json", // Use "multipart/form-data" if uploading files
                },
            });
            console.log(response)
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
        }
    }

    return (
        <SignupContext.Provider value={{ currentPosition, maxPosition, selectedPlan, contactInfoData, companyInfoData, paymentData, submitFormData, submitFormFunction, setSubmitFormData, setPaymentData, setCompanyInfoData, setContactInfoData, setSelectedPlan, setCurrentPosition, setMaxPosition }}>
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupState;