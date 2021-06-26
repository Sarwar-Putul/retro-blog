import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ReadFullBlog = () => {
    const {id} = useParams();

    const [fullBlog, setFullBlog] = useState({});

    useEffect(() => {
        fetch(`https://mysterious-oasis-52654.herokuapp.com/blog/${id}`)
        .then(response => response.json())
        .then(data => setFullBlog(data))
    }, [id]);

    return (
        <div className="container">
            <h1>{fullBlog.name}</h1>
            
            <p>{fullBlog.description}</p>
            <Link to='/'> <button>Back </button> </Link>
        </div>
    );
};

export default ReadFullBlog;