import React, { useContext } from 'react';
import "tailwindcss/tailwind.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://mysterious-oasis-52654.herokuapp.com/isAdmin', {
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => {
            setIsAdmin(data)
        })

    }, [])
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid ">
                    <Link to="/" class="navbar-brand text-warning" href="#">SP BLOGS</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active text-warning" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link text-warning" href="#">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-warning" href="#">About</Link>
                            </li>
                {/* {isAdmin &&  */}
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-warning" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dashboard </Link>
                                <ul class="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/addAdmin" class="dropdown-item text-warning" href="#">Add Admin</Link></li>
                                    <li><Link to="/writeBlog" class="dropdown-item text-warning" href="#">Write Blog</Link></li>
                                    <li><Link to="/manageBlog" class="dropdown-item text-warning" href="#">Manage Blog</Link></li>
                                </ul>
                            </li> 
                    {/* } */}
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;