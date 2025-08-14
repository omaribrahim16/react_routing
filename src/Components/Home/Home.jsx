import React from 'react'
import profImg from '../../assets/avataaars.svg'
import MainTitle from '../MainTitle/MainTitle'
export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center gap-10 text-white'>
            <img src={profImg} className='w-64' alt="avatar" />
            <MainTitle>start framework</MainTitle>
            <p className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}
