import React, { useState } from 'react'
import img1 from './../../assets/port1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'
import img4 from './../../assets/port1.png'
import img5 from './../../assets/port2.png'
import img6 from './../../assets/port3.png'
import MainTitle from '../MainTitle/MainTitle'




const imgList = [img1, img2, img3, img4, img5, img6];

export default function Portofolio() {
    const [IsOpen, setIsOpen] = useState(null);
    // const [currentImage, setCurrentImage] = useState(null);
    function handleOpen(number) {
        setIsOpen(number);
        // setCurrentImage(number);
    }
    return (
        <>
            {/* {console.log(currentImage)} */}
            <div className="text-center w-full mt-24 py-16">
                <MainTitle>Portofolio components</MainTitle>
                <div className='flex flex-wrap bg-none '>

                    {imgList.map((ele, index) => (
                        <Card
                            key={index}
                            number={index}
                            image={ele}
                            onHandleModal={handleOpen}
                        />
                    ))}
                </div>
            </div>
            {IsOpen != null ? <Modal onHandleModal={setIsOpen} image={imgList[IsOpen]} /> : null}
        </>
    );
}

function Card({ image, onHandleModal, number }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
            <img
                src={image}
                alt=""
                className='w-full rounded-md'
                onClick={() => onHandleModal(number)} />

        </div>
    );
}

function Modal({ image, onHandleModal }) {
    return <div className=" fixed inset-0 bg-blue-500/45 center layoutimg"
        onClick={(e) => {
            if (e.target.classList.contains('layoutimg')) {
                onHandleModal(null)
            }
            e.stopPropagation();
        }}
    >
        <div className="w-2/5  mx-auto  ">
            <img src={image} alt="" />
        </div>

    </div>
}