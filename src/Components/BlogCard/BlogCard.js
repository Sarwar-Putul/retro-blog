import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    
    return (
        <Link to={`/readFullBlog/${blog._id}`}>
                <div class="lg:w-1/3 blog sm:w-1/2 p-4">
                    <div className="relative flex photo">
                        {
                            blog.image ? <img alt="gallery" class="absolute img-fluid inset-0 h-full object-cover object-center" src={`data:image/png;base64,${blog.image.img}`} /> 
                            :
                            <img alt="gallery" class="absolute img-fluid inset-0 w-full h-full object-cover object-center" src={`https://mysterious-oasis-52654.herokuapp.com/${blog.img}`} /> 
                        }
                        <div class="px-8 py-10 relative text-part z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h1 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{blog.name}</h1>
                            <p class="title-font text-lg font-medium text-gray-900 mb-3"><small>{`${new Date().toLocaleString()}`}</small></p>
                            <p class="leading-relaxed">{blog.description} </p>
                        </div>
                    </div>
                </div>
        </Link> 
    );
};

export default BlogCard;