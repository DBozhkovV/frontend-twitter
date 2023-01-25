import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            axios.get(`http://localhost:3000/posts`)
                .then(response => {
                    setPosts(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        getPosts();
    }, []);

    if(!posts) return null;

    return(
        <div>
            <h1>Posts</h1>
        </div>
    );
}

export default Home;