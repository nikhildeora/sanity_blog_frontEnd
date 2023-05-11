import React, { useEffect, useState } from 'react'
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url'
import { Link } from "react-router-dom"
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';




const AllBlogs = () => {
  const [blog, setBlog] = useState();
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source)
  }

  const getPost = async () => {
    let response = await client.fetch(`*[_type=="post"]{
      ...,
      author->,
    }`);
    console.log(response);
    setBlog(response)
  }

  useEffect(() => {
    getPost();
  }, [])

  const deleteBlog = async (id) => {
    try {

      let response = await client.fetch(`*[_type=="post" && _id==${id}]`, {
        method: "delete",
        headers: {
          Authorization: `Bearer skv1jPkv4t00iimtrHsb2uUq9u5dr6S5KtNX0ecGzfywiaHKzoX4U9tkf5kFDTWQ0Sp0yxExjZKyr0HDwL6xS8pHrAl79Knt4ZIjQCQRJAfrBE6MsYiCnQCYzzgjuEj72MDFwXuuj3r05ZidafZpNb2aw1mSAUEDrIGgl25WkuZsb4i1HWkV`
        },
      });
      
      console.log(response);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <Container maxW={'7xl'} p="12" >
      <Heading as="h1">My Blogs</Heading>
      {blog && blog.map((el, i) => {
        return (<Box key={i} display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <img width={"20%"} src={urlFor(el.mainImage).width(200).url()} alt="image" />
            <Box>
              <Link to={`/blog/${el.slug.current}`} state={{ perBlog: el }} >
                <Heading>Title : {el.title}</Heading>
              </Link>
              <p>Author : {el.author.name}</p>
              <div>
                {el.body[0].children[0].text}
              </div>
            </Box>
          </HStack>
          <button onClick={() => deleteBlog(el._id)} style={{ border: "1px solid black", backgroundColor: "red", width: "30%", color: "white", borderRadius: "6px" }}>Delete</button>
        </Box>)
      })}
    </Container>
  )
}

export default AllBlogs;





