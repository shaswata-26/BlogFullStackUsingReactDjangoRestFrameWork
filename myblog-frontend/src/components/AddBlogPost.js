import React, { useState } from 'react';
import axios from 'axios';

const AddBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/posts/', { title, content })
      .then(response => {
        alert('Blog post added successfully!');
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error("There was an error adding the blog post!", error);
      });
  };

  return (
    <div>
      <h1>Add Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddBlogPost;

