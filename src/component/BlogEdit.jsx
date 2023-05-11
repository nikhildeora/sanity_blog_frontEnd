import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Button, Input } from '@chakra-ui/react'

const BlogEdit = () => {
    const [title,setTitle] = useState("")
    const location = useLocation();
    const blog = location.state.perBlog;

   useEffect(()=>{
       setTitle(blog.title)
   },[])

  const editTitle = async () => {
     console.log(title);
  }

  return (
    <div>
        <Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}  />
        <Button onClick={editTitle} colorScheme='blue'>Edit</Button>
    </div>
  )
}

export default BlogEdit;