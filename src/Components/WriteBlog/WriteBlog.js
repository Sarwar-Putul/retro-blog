import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';




const WriteBlog = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        

    }
    const handleImageUpload = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
        
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
            formData.append('file', file);
            formData.append('name', info.name);
            formData.append('description', info.description);

            fetch('https://mysterious-oasis-52654.herokuapp.com/addBlog',{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data){
                    alert('Your Blog Posted Successfully')
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
            <div>
                <Navbar></Navbar>
                <container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", color: "red"}}>
                    <div  className = "w-100" style={{maxWidth:"400px"}}>
                        <h1>Write your blog</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Title</label>
                                <input onBlur={handleBlur} type="text" name="name" class="form-control" id="name"  />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea onBlur={handleBlur} type="text" name="description" class="form-control" id="description" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Upload Picture </label>
                                <input onChange={handleImageUpload} class="form-control" name="file" type="file" id="formFile" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </container>
            </div>
    
    );
};

export default WriteBlog;