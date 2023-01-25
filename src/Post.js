import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Post = () => {
    const [content, setContent] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/posts`, {
            content: content
        })
        .catch(error => {
            console.log(error);
        })
    };

    return(
        <div className="login-frame">
            <h1>Create post</h1>
            <form>
                <label htmlFor="name">Content: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setContent(e.target.value)}
                />
            </form>
            <Button variant="outline-primary" onClick={(e) => handleSubmit(e)}>Post</Button>
        </div>
    );
}

export default Post;