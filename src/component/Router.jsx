import React from 'react';
import {Routes,Route} from "react-router-dom";
import AllBlogs from './AllBlogs';
import SingleBlog from './SingleBlog';
import AddBlog from './AddBlog';
import BlogEdit from './BlogEdit';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path='/edit_blog/:slug' element={<BlogEdit />} />
    </Routes>
  )
}

export default Router;