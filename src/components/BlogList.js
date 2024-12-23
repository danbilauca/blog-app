import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = ({ onSelect }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BLOG_API_URL}/posts`)
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul className='blog-list'>
                {posts.map(post => (
                    <li key={post.id} onClick={() => onSelect(post)}>
                        <h3>{post.title}</h3>
                        <p>{post.content.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
