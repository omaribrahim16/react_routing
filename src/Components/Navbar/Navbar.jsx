import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [Ismenu, setIsmenu] = useState(false);
    function handleMenu() {
        setIsmenu(!Ismenu);
    }

    const [isScroll, setisScroll] = useState(false);
    function handleScroll() {
        if (window.scrollY > 20) {
            setisScroll(true);
        } else {
            setisScroll(false);
        }
    }
    window.addEventListener('scroll', handleScroll);





    return (
        <>
            <nav className={`bg-[#2b3d4f] text-white py-5 text-2xl fixed z-10 start-0 top-0 right-0 transition-all duration-500 ${isScroll ? "py-4" : "py-9"}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo text-3xl font-bold">
                        <Link to="/">START FRAMEWORK</Link>
                    </div>

                    <div className="menu hidden lg:block">
                        <ul className='navList'>

                            <li >
                                <NavLink className='px-2 py-1 rounded-md' to="About">ABOUT</NavLink>
                            </li>
                            <li >
                                <NavLink className='px-2 py-1 rounded-md' to="portofolio">PORTOFOLIO</NavLink>
                            </li>

                            <li >
                                <NavLink className='px-2 py-1 rounded-md' to="Contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-icon block lg:hidden" onClick={handleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>


                </div>
                <div className={`mobile-menu px-7 -translate-y-96  ${Ismenu ? "transition-all translate-y-0 duration-500 ease-in-out" : "hidden"} lg:hidden`}>
                    <ul className='navList flex-col justify-start items-start text-start'>
                        <li className='text-start w-full'>
                            <NavLink className='px-2 py-1 rounded-md' to="About">ABOUT</NavLink>
                        </li>
                        <li className='text-start w-full'>
                            <NavLink className='px-2 py-1 rounded-md' to="portofolio">PORTOFOLIO</NavLink>
                        </li>
                        <li className='text-start w-full'>
                            <NavLink className='px-2 py-1 rounded-md' to="Contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>

    )
}

