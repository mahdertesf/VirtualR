import React from 'react';
import logo from '../assets/logo.png';
import {navItems} from '../constants';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const handleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-y-neutral-700/80'>
       <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
                <img src={logo} alt="logo" className='w-10 h-10 mr-2'/>
                <span className=' text-xl tracking-tight'>VirtualR</span>
            </div>
            <ul className='hidden lg:flex ml-14 gap-12'>
                {navItems.map((item)=>{
                    return(
                        <li key={item.label} ><a href={item.href}>{item.label}</a></li>
                    )
                })}
               
            </ul>
            <div className='hidden lg:flex gap-6 '>
                <a href='#' className='py-2 px-3 border rounded-md '>SignIn</a>
                <a href='#' className='bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
            </div>
            <div className='lg:hidden  flex-col justify-end'>
                <button onClick={handleMobileDrawer}>{
                    mobileDrawerOpen ? <IoMdCloseCircleOutline className='w-8 h-8'/> : <RxHamburgerMenu className='w-8 h-8'/> }</button>
            </div>

        </div>
        {mobileDrawerOpen &&  <div className=' right-0 z-20  w-full p-12'>
            <ul className=' flex flex-col items-center gap-3'>
                {navItems.map((item)=>{
                    return(
                        <li key={item.label} ><a href={item.href}>{item.label}</a></li>
                    )
                })}
               
            </ul>
            <div className='fixed mt-4 flex gap-10 justify-center'>
                <a href='#' className='py-2 px-3 border rounded-md '>SignIn</a>
                <a href='#' className='bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md '>Create an Account</a>

            </div>
            </div>}

       </div>

    </nav>
  )
}

export default Navbar