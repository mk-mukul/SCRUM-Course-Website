import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <nav className=' px-16 py-10 font-bold bg-purple text-white flex justify-between items-center'>
        <div>
            <img width={151} height={48} className='text-white' src={logo} alt="logo" />
        </div>
        <ul className='flex gap-12'>
            {/* <li><Link to="/">HOME</Link></li> */}
            <li>ABOUT</li>
            <li>COURSES</li>
            <li>BLOGS</li>
        </ul>
        <div className='flex gap-5 items-center'>
            <a href="#">LOGIN</a>
            <Button text="SIGN UP"/>
        </div>
    </nav>
  )
}

export default Navbar