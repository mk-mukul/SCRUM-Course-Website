import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from './Button'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState("-right-96");
  const toggleNav = () => {
    if (toggleMenu == "-right-96") {
      setToggleMenu("right-0")
    } else {
      setToggleMenu("-right-96")
    }
  }

  const [navHide, setNavHide] = useState("py-6 md:py-10")

  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        setNavHide("py-6 md:py-10")
      } else {
        setNavHide(" py-3 md:py-5")
      }
      if (lastScroll < window.scrollY) {
      } else {
      }
      lastScroll = window.scrollY;
    });

  }, [])
  

  return (
    <nav className={`fixed top-0 w-screen z-10 px-4 md:px-8 lg:px-16 font-bold bg-purple text-white flex justify-between items-center ${navHide}`}>
      <div className=' md:absolute'>
        <Link className=' flex gap-4 items-center' to="#" >
          <img width={50} className='text-white' src={logo} alt="logo" />
          <p>SCRUMVERSE</p>
        </Link>
      </div>
      <div onClick={() => { toggleNav() }} className=' z-20 md:hidden cursor-pointer text-4xl transition-all'>
        {toggleMenu=="-right-96"?<FiMenu />:<FiX />}
      </div>
      <div className={` fixed flex md:right-0 md:relative z-10 top-0 h-screen md:h-auto w-80 md:w-full justify-center flex-col md:flex-row md:justify-between items-center gap-6 bg-purple md:bg-transparent transition-all bg-opacity-80 md:bg-opacity-100 shadow-xl md:shadow-none ${toggleMenu}`}>
        <div />
        <ul className={` flex flex-col md:flex-row items-center gap-6 lg:gap-12`}>
          <li><Link to="#">HOME</Link></li>
          <li><Link to="#about">ABOUT</Link></li>
          <li><Link to="#courses">COURSES</Link></li>
          <li><Link to="#blogs">BLOGS</Link></li>
        </ul>
        <div className=' flex flex-col md:flex-row gap-6 md:gap-3 lg:gap-5 items-center'>
          <Link to="#">LOGIN</Link>
          <Button className='hover:text-purple hover:bg-white transition-all' text="SIGN UP" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar