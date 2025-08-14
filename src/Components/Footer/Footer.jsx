import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className='flex flex-row justify-between items-center py-5 bg-[#2b3d4f] text-white'>
                <div className="w-1/3 text-center my-5 py-5">
                    <p className='w-full text-3xl font-semibold py-3 '>LOCATION</p>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                <div className="w-1/3 text-center my-5 py-5">
                    <p className='w-full text-3xl font-semibold py-3'>AROUND THE WEB</p>
                    <i className='text-2xl mx-1 fa-brands fa-facebook'></i>
                    <i className='text-2xl mx-1 fa-brands fa-twitter'></i>
                    <i className='text-2xl mx-1 fa-brands fa-linkedin-in'></i>
                    <i className='text-2xl mx-1  fa-solid fa-globe'></i>

                </div>
                <div className="w-1/3 text-center my-5 py-5">
                    <p className='w-full text-3xl font-semibold py-3 '>ABOUT FREELANCER</p>
                    <p className=''>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>

                </div>

            </div>

            <div className="copyright bg-[#19242e] py-5 text-white text-center">
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>

    )
}
