import React from "react";
import axios from "axios";

const Logout = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/logout`)
            //token: sessionStorage.getItem('i)
        .then((response) => {
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('userId');
        })
        .catch(error => {
            console.log(error);
        })
    };
    
    return(
        <div>
            <h1>Logout</h1>
            <button onClick={(e) => handleSubmit(e)}>Logout</button>
        </div>
    );
}

export default Logout;