import React, { useState } from 'react';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
        console.log(newAdmin);
    }

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData()
            formData.append('name', admin.name);
            formData.append('email', admin.email);

            fetch('https://mysterious-oasis-52654.herokuapp.com/addAdmin', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('Admin added successfully');
                    console.log(data);
                }
            })
    }
    return (
        <div>
            <container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", color: "red"}}>
                    <div  className = "w-100" style={{maxWidth:"400px"}}>
                        <h1>Add A Admin</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input onBlur={handleBlur} type="text" name="name" class="form-control" id="name"  />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <input onBlur={handleBlur} type="text" name="email" class="form-control" id="description" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </container>
        </div>
    );
};

export default AddAdmin;