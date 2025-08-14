import React, { useState } from 'react'
import MainTitle from './../MainTitle/MainTitle';

export default function Contact() {
    const [isChange, setIsChange] = useState({
        name: false,
        email: false,
        age: false,
        password: false,
    });
    function handleChange(e) {
        setIsChange((previous) => ({ ...previous, [e.target.id]: true, }));
    }


    return (


        <div className='w-full '>
            <div className=" mb-10 bg-white">
                <MainTitle>Contact section</MainTitle>
            </div>
            <div className="mx-auto w-2/3 ">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group relative py-3 mb-4">
                        <label htmlFor="name" className={`
                            absolute left-0 top-10 text-black
                            ${isChange.name ? "opacity-100 top-[-20px]" : "opacity-0"} 
                            transition-all duration-300 `}>userName</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='userName'
                            className='w-full py-2 outlin-none border-b-2 bg-white rounded'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group relative py-3 mb-4">
                        <label htmlFor="name" className={`
                            absolute left-0 top-10 text-black
                            ${isChange.age ? "opacity-100 top-[-20px]" : "opacity-0"} 
                            transition-all duration-300 `}>userAge</label>
                        <input
                            type="text"
                            id="age"
                            placeholder='userAge'
                            className='w-full py-2 outlin-none border-b-2 bg-white rounded'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group relative py-3 mb-4">
                        <label htmlFor="name" className={`
                            absolute left-0 top-10 text-black
                            ${isChange.email ? "opacity-100 top-[-20px]" : "opacity-0"} 
                            transition-all duration-300 `}>userEmail</label>
                        <input
                            type="text"
                            id="email"
                            placeholder='userEmail'
                            className='w-full py-2 outlin-none border-b-2 bg-white rounded'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group relative py-3 mb-4">
                        <label htmlFor="name" className={`
                            absolute left-0 top-10 text-black
                            ${isChange.password ? "opacity-100 top-[-20px]" : "opacity-0 top-[20px]"} 
                            transition-all duration-300 `}>userPassword</label>
                        <input
                            type="text"
                            id="password"
                            placeholder='userPassword'
                            className='w-full py-2 outlin-none border-b-2 bg-white rounded'
                            onChange={handleChange}
                        />
                    </div>
                    <button className='py-2 px-4 bg-[#1abd9c] rounded hover: cursor-pointer'>Submit</button>
                </form>

            </div>
        </div>
    )
}
