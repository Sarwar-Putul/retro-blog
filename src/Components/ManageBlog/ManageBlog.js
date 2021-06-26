import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ManageCard from '../ManageCard/ManageCard';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            <Link to='/'><button className="btn-dark">Back to the Home</button></Link>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">           
                <div class="flex overflow-hidden -m-4">
                    {
                        blogs.map(blog => <ManageCard blog={blog} key={blog._id}></ManageCard>)
                    } 
                </div>   
            </div>
        </section>
            
        </div>
    );
};

export default ManageBlog;