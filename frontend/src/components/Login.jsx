import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/user/login', formData);

            console.log("Full API Response:", response.data); // Debugging

            const { userName, role, email, token } = response.data;

            alert("Login Successful");

            // Store role in localStorage
            localStorage.setItem("role", JSON.stringify(role));
            localStorage.setItem("token", JSON.stringify(token));
            e.target.reset();
            Navigate('/'); //Navigate to the home page
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            console.log("Login error:", errorMessage);
            alert(errorMessage);
        }
    };

    return (
        <>

            <div className='w-full h-screen bg-gray-300'>
                <div className='flex justify-center items-center '>

                    <div className='flex justify-center items-center bg-white rounded mt-24'>
                        
                        <form onSubmit={handleSubmit} className="w-72 md:w-96 p-4 flex flex-col gap-4" >

                            <label> email :</label>
                            <input type="email" name='email' placeholder='Enter Email' className='border p-1' onChange={handleChange} required />

                            <label> Password :</label>
                            <input type="text" name='password' placeholder='Enter Password' className='border p-1' onChange={handleChange} required />
                            <div className='flex justify-center'>
                                <button type='submit' className='bg-blue-600 rounded text-white px-8 py-2 mt-2'>Login</button>
                            </div>
                            <Link to='/signup' className='flex justify-center mt-2'><p>Don't have an account?</p></Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login