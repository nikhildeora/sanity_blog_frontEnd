import React, { useEffect, useState } from 'react'
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url'
import { useLocation } from "react-router-dom"
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

const SingleBlog = () => {
    const location = useLocation();
    const blog = location.state.perBlog;
    const builder = imageUrlBuilder(client);

    function urlFor(source) {
      return builder.image(source)
    }

    return (
        <Box display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <VStack marginTop="2" spacing="2" display="flex" alignItems="center">
                <img width={"20%"} src={urlFor(blog.mainImage).width(200).url()} alt="image" />
                <Box>

                    <Heading>Title : {blog.title}</Heading>
                    <p>Author : {blog.author.name}</p>
                    <div>
                        {blog.body.map((body, i) => {
                            return (<div key={i}>
                                <p>{body.children[0].text}</p>
                                <p>{body.children[1] && body.children[1].text}</p>
                            </div>)
                        })}
                    </div>
                </Box>
            </VStack>
        </Box>
    )
}

export default SingleBlog;