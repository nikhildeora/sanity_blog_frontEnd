import React from 'react';
import {Routes,Route} from "react-router-dom";
import AllBlogs from './AllBlogs';
import SingleBlog from './SingleBlog';
import AddBlog from './AddBlog';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
    </Routes>
  )
}

export default Router;