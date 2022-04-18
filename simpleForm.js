import React, { useState } from "react";

function BasicForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const formStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "yellow",
        borderRadius: "10%",
        border: "2px solid black",
        padding: "20px"

    }
    const inputStyle = {
        padding: "5px",
        marginTop: "5px",
        marginBottom: "20px"
    }
    const buttonStyle = {
        padding: 8,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "orange",
        borderRadius: "10%"
    }
    const spanStyle = {
        color: "red",
        fontSize: 8
    }
    const submitHandler = () => {
        if ((firstName) && (lastName) && (email)) {
            alert(`welcome dear ${firstName} ${lastName}`);
            setFirstName("");
            setLastName("");
            setEmail('');
        }
        if (firstName) {
            document.getElementById('firstName').classList.add("displayNon")
        } else(
            document.getElementById('firstName').classList.remove("displayNon")
        )
        if (lastName) {
            document.getElementById('lastName').classList.add("displayNon")
        } else(
            document.getElementById('lastName').classList.remove("displayNon")
        )
        if (email) {
            document.getElementById('email').classList.add("displayNon")
        } else(
            document.getElementById('email').classList.remove("displayNon")
        )
    }
    return ( <
        >
        <
        form style = { formStyle }
        onSubmit = { submitHandler } >
        <
        span id = "firstName"
        style = { spanStyle } > ** Please Enter Your FirstName ** < /span> <
        input type = 'text'
        style = { inputStyle }
        value = { firstName }
        onChange = {
            (ev) => setFirstName(ev.target.value)
        }
        placeholder = "First Name"
        required / >
        <
        span id = "lastName"
        style = { spanStyle } > ** Please Enter Your LastName ** < /span> <
        input type = 'text'
        style = { inputStyle }
        value = { lastName }
        onChange = {
            (ev) => setLastName(ev.target.value)
        }
        placeholder = "Last Name"
        required / >
        <
        span id = "email"
        style = { spanStyle } > ** Please Enter Your Email ** < /span> <
        input type = 'email'
        style = { inputStyle }
        value = { email }
        onChange = {
            (ev) => setEmail(ev.target.value)
        }
        placeholder = "Email"
        required / >
        <
        button type = "submit"
        style = { buttonStyle }
        onClick = { submitHandler } > Register < /button>


        <
        /form> < / >
    )
}
export default BasicForm;