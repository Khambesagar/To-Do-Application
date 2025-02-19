import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
function Signup() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        role: 'user'
    })

    const Navigate = useNavigate();

    // handle Input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:4000/user/signup', formData)
            .then((res) => {
                console.log(res.data);
                console.log(formData.role);

                // Save user details
                // localStorage.setItem("user",JSON.stringify(res.data))
                // localStorage.setItem("Role",JSON.stringify(formData.role))
                alert('Signup successful');

                // reset form;
                e.target.reset();
                Navigate('/login'); //Navigate to the Login page
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || error.message;
                console.log("Signup error:", errorMessage);
                alert("signup error " + errorMessage);
            });

    }


    return (
        <>
            <div className='w-full h-screen bg-gray-300'>
                <div className='flex justify-center items-center '>

                    <div className='flex justify-center items-center bg-white rounded mt-24'>

                        <form onSubmit={handleSubmit} className='w-72 md:w-96 p-4 flex flex-col gap-4' >
                            <label> Name :</label>
                            <input type="text" name="userName" placeholder='Enter Name' className='border p-1' onChange={handleChange} required />

                            <label> email :</label>
                            <input type="email" name='email' placeholder='Enter Email' className='border p-1' onChange={handleChange} required />

                            <label> Password :</label>
                            <input type="text" name='password' placeholder='Enter Password' className='border p-1' onChange={handleChange} required />

                            <div className='flex gap-4'>
                                <span>Role: </span>
                                <label htmlFor="">
                                    <input type="radio" name='role' value="user" checked={formData.role === 'user'} placeholder='Enter Password' onChange={handleChange} required />
                                    User
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name='role' value="admin" checked={formData.role === 'admin'} placeholder='Enter Password' onChange={handleChange} required />
                                    Admin
                                </label>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='bg-blue-600 rounded text-white px-8 py-2 mt-2'>Signup</button>
                            </div>
                            <div className='flex justify-center'>
                                <Link to='/login'><p>Already have an account?</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup