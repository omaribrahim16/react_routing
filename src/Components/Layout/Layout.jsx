import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    const { pathname } = useLocation();

    const isWhite = pathname === "/Contact" || pathname === "/portofolio";

    return (

        <>

            <Navbar />
            <div className={`min-h-dvh ${isWhite ? "bg-white" : "bg-[#1abc9c]"}  flex items-center justify-center text-center`}>
                <div className="container center ">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>

    )
}
