import React from 'react'
import img from '../assets/images/Rectangle 5.png'
import bookmark from "../assets/icons/bookmark.png"
import star from "../assets/icons/star.png"
import starHalf from "../assets/icons/star-half.png"
import Button from "./Button"

const HomeCard = () => {
    return (
        <div className=' w-80 pb-5 rounded-xl shadow-2xl hover:shadow-xl'>
            <img width={"100%"} className=' rounded-t-xl' src={img} alt="card" />
            <div className=' px-7 pt-3'>
                <div className=' relative flex justify-center'>
                    <h3 className=' font-semibold'>Learn SCRUM: The Complete Beginner Course</h3>
                    <div className=' w-6'>
                        <img src={bookmark} alt="bookmark" />
                    </div>
                </div>
                <p className=' mt-2 text-sm'>Samay Jain, Ex-KPMG</p>
                <div className=' mt-2 flex items-center gap-1'>
                    <span className='mr-2'>4.5</span>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div className=' relative'>
                        <img src={star} alt="star" />
                        <div className=' absolute top-0 left-2/4 w-4 h-4 bg-white'></div>
                    </div>
                </div>
                <div className=' flex mt-3'>
                    <Button className=" text-blue border-blue" text={"ENROLL NOW"} />
                </div>
            </div>
        </div>
    )
}

export default HomeCard