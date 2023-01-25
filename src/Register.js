import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/register`, {
            name: name
        })
        .catch(error => {
            console.log(error);
        })
    };

    return(
        <div className="login-frame">
            <h1>Register</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
            </form>
            <Button variant="outline-primary" onClick={(e) => handleSubmit(e)}>Register</Button>
        </div>
    );
}

export default Register;