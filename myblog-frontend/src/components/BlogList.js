import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogList.css'; // Optional: Import CSS for additional styling

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching posts');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="blog-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span className="date">{new Date(post.created_at).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
