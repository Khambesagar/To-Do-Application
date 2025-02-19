import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { MdAccountCircle } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import logo from '../assets/images/icon.png'

// Logout button
function Navbar() {
    const Navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role');
        Navigate('/login');
    }
    return (
        <>
            <div className='bg-slate-600 text-white'>
                <div className='container mx-auto flex justify-between items-center py-4 px-2 md:px-0'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className=' w-10 h-10 md:w-12 md:h-12 ' />
                        <Link to='/'> <h1 className='md:text-2xl font-bold'>To-<span className='text-orange-300'>Do</span>-App</h1></Link>
                    </div>
                    <ul className='flex gap-4 text-lg'>
                        <Link to='/'> <li className='hover:text-orange-300'><IoHome className='md:hidden' /><p className='hidden md:block'>Home</p></li></Link>
                        <Link to='/contact'><li className='hover:text-orange-300'><MdEmail className='md:hidden' /><p className='hidden md:block'>Contact</p></li></Link>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=' hover:text-orange-300 flex items-center text-center'><MdAccountCircle className='flex items-center text-center text-xl md:text-2xl' /> <p className='px-1 hidden md:block'> Account</p></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100  rounded-box z-[1] w-32 p-2 mt-2 shadow">
                                <li className='text-green-700'><Link to='/login'> <FaKey /> Login</Link></li>
                                <li className='text-blue-700'><Link to='/signup'> <FaUserTie /> Signup</Link></li>
                                <li className=' text-red-700'><a onClick={handleLogout}><RiLogoutCircleLine /> Logout</a></li>
                            </ul>
                            {/* </div> */}
                        </div>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar