import React, { useState } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetails from './components/BlogDetails';
import './styles.css';

const App = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [posts, setPosts] = useState([]);

    const handlePostAdded = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            <h1>My Blog</h1>
            <BlogForm onPostAdded={handlePostAdded} />
            <BlogList onSelect={(post) => setSelectedPost(post)} />
            <BlogDetails post={selectedPost} />
        </div>
    );
};

export default App;
