import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import AddBlogPost from './components/AddBlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/add" element={<AddBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

