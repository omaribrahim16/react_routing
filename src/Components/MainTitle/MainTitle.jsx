import './MainTitle.css'
import React from 'react'

export default function MainTitle({ children }) {
    return (
        <h1 className='main-title relative w-fit pb-5 mx-auto mb-5 uppercase text-4xl font-bold text-center'>
            {children}
        </h1>
    )
}
