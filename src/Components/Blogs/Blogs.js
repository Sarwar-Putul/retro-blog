import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-oasis-52654.herokuapp.com/blogs')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">           
                <div class="flex overflow-hidden -m-4">
                    {
                        blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                    } 
                </div>   
            </div>
        </section>
    );
};

export default Blogs;