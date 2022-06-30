import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <nav className=' px-16 py-10 font-bold bg-purple text-white flex justify-between items-center'>
        <div className=''>
          <Link className=' flex gap-4 items-center' to="#" >
            <img width={50} className='text-white' src={logo} alt="logo" />
            <p>SCRUMVERSE</p>
          </Link>
        </div>
        <ul className='flex gap-12'>
            <li><Link to="#">HOME</Link></li>
            <li><Link to="#about">ABOUT</Link></li>
            <li><Link to="#courses">COURSES</Link></li>
            <li><Link to="#blogs">BLOGS</Link></li>
        </ul>
        <div className='flex gap-5 items-center'>
            <Link to="#">LOGIN</Link>
            <Button text="SIGN UP"/>
        </div>
    </nav>
  )
}

export default Navbar