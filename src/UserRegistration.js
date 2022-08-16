import React from "react";
import { useState, useEffect } from "react";
import "./UserRegistration.css";

import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NAME_REGEX = /^[a-z ,.'-]+$/i;
const NPI_REGEX = /^\d{10}$/;
const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const EMAIL_REGEX =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/;

const UserRegistration = () => {
    const [firstName, setFirstName] = useState("");
    const [isValidFirstName, setIsValidFirstName] = useState(false);

    const [lastName, setLastName] = useState("");
    const [isValidLastName, setIsValidLastName] = useState(false);

    const [npiNumber, setNpiNumber] = useState("");
    const [isValidNpiNumber, setIsValidNpiNumber] = useState(false);

    const [businessAddress, setBusinessAddress] = useState("");
    const [isValidBusinessAddress, setIsValidBusinessAddress] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const allInputFieldsValid = () => {
        return (
            isValidFirstName &&
            isValidLastName &&
            isValidNpiNumber &&
            isValidBusinessAddress &&
            isValidPhoneNumber &&
            isValidEmail
        );
    };

    const handleSubmit = (e) => {
        var user = {
            firstName: firstName,
            lastName: lastName,
            npiNumber: npiNumber,
            businessAddress: businessAddress,
            phoneNumber: phoneNumber,
            email: email,
        };
        alert(JSON.stringify(user, null, 5));
        e.preventDefault();
    };

    // local component to display checkmark or times (X) symbol
    // also provide valid/invalid CSS class for color
    function ValidationIcon({ isValid }) {
        var v = isValid ? "valid" : "invalid";
        return (
            <IconContext.Provider value={{ className: v }}>
                {isValid ? <FaCheck/> : <FaTimes/>}
            </IconContext.Provider>
        );
    }

    // Validate all User Registration fields as they change

    useEffect(() => {
        setIsValidFirstName(NAME_REGEX.test(firstName));
    }, [firstName]);

    useEffect(() => {
        setIsValidLastName(NAME_REGEX.test(lastName));
    }, [lastName]);

    useEffect(() => {
        setIsValidNpiNumber(NPI_REGEX.test(npiNumber));
    }, [npiNumber]);

    useEffect(() => {
        setIsValidBusinessAddress(businessAddress.trim().length > 0);
    }, [businessAddress]);

    useEffect(() => {
        setIsValidPhoneNumber(PHONE_REGEX.test(phoneNumber));
    }, [phoneNumber]);

    useEffect(() => {
        setIsValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    return (
        <section>
            <h1>User Registration</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">
                    First Name:
                    <ValidationIcon isValid={isValidFirstName} />
                </label>
                <input
                    type="text"
                    id="firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <label htmlFor="lastname">
                    Last Name:
                    <ValidationIcon isValid={isValidLastName} />
                </label>
                <input
                    type="text"
                    id="lastname"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <label htmlFor="npinumber">
                    NPI Number:
                    <ValidationIcon isValid={isValidNpiNumber} />
                </label>
                <input
                    type="text"
                    id="npinumber"
                    onChange={(e) => setNpiNumber(e.target.value)}
                    required
                />

                <label htmlFor="business-address">
                    Business Address:
                    <ValidationIcon isValid={isValidBusinessAddress} />
                </label>
                <input
                    type="text"
                    id="business-address"
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    required
                />

                <label htmlFor="phonenumber">
                    Phone Number:
                    <ValidationIcon isValid={isValidPhoneNumber} />
                </label>
                <input
                    type="text"
                    id="phonenumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <label htmlFor="email">
                    Email Address:
                    <ValidationIcon isValid={isValidEmail} />
                </label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button disabled={!allInputFieldsValid()}>Submit</button>
            </form>
        </section>
    );
};

export default UserRegistration;
