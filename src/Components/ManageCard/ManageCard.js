import React from 'react';

const ManageCard = ({blog}) => {



    const deleteBlog = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                alert('Your blog deleted successfully');
            }
        })

    }
    return (
        <div  class="lg:w-1/3 blog sm:w-1/2 p-4">
                    <div className="relative flex photo">
                        {
                            blog.image ? <img alt="gallery" class="absolute img-fluid inset-0 h-full object-cover object-center" src={`data:image/png;base64,${blog.image.img}`} /> 
                            :
                            <img alt="gallery" class="absolute img-fluid inset-0 w-full h-full object-cover object-center" src={`http://localhost:5000/${blog.img}`} /> 
                        }
                        <div class="px-8 py-10 relative text-part z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <button className="btn-danger" onClick={() =>deleteBlog(blog._id)}>Delete</button>
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{blog.name}</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                            <p class="leading-relaxed">{blog.description} </p>
                        </div>
                    </div>
        </div> 
    );
};

export default ManageCard;