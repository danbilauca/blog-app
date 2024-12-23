import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BLOG_API_URL}/posts`, { id: Date.now(), title, content })
            .then(response => {
                onPostAdded(response.data);
                setTitle('');
                setContent('');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a Blog Post</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">Create</button>
        </form>
    );
};

export default BlogForm;
