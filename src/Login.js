import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState(null);
    
    const navigate = useNavigate();
        
    const routeChange = () => {
        navigate(`/`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/login`, {
            name: name
        })
        .then((response) => {
            sessionStorage.setItem('id', response.data['id']);
            sessionStorage.setItem('userId', response.data['userId']);
            routeChange();
        })
        .catch(error => {
            console.log(error);
        })
    };

    return(
        // Make login form
        <div className="login-frame">
            <h1>Login</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
            </form>
            <Button variant="outline-primary" onClick={(e) => handleSubmit(e)}>Login</Button>
        </div>
        
    );
};

export default Login;