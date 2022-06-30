import React from 'react'
import Button from '../components/Button'
import TimeCard from '../components/TimeCard'
import img1 from '../assets/images/Ellipse 1.png'
import img2 from '../assets/images/Ellipse 2.png'
import img3 from '../assets/images/Ellipse 3.png'
import img4 from '../assets/images/Ellipse 4.png'

const Home = () => {
  return (
    <div className=' mb-64 bg-purple px-16 text-white'>
      <main>
        <section className='grid grid-cols-2'>
          <div className=' flex flex-col py-16'>
            <div className='flex'>
              <p className=' px-5 py-1 bg-white text-purple opacity-95 rounded-full'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
            </div>
            <div className=' mt-8 text-4xl font-bold'>
              <p>Unleash Your SCRUM Skill,</p>
              <p>Grab More Attention To Resume</p>
            </div>
            <div className='flex mt-8'>
              <Button text="ENROLL NOW" />
            </div>
            <div>
              <div className='mt-8 py-10 flex flex-col items-center w-max'>
                <p className=' font-semibold'>10% OFF on all cources*|Offer Valid For</p>
                <div className=' mt-1 h-0.5 w-14 bg-white'></div>
                <div className='flex gap-8 mt-3'>
                  <TimeCard label="Hrs." value={"02"} />
                  <TimeCard label="Mins." value={"58"} />
                  <TimeCard label="Secs." value={"42"} />
                </div>
              </div>
            </div>
          </div>

          <div className=' relative'>
            <div className=' absolute -bottom-20 -right-48'>
              <img src={img1} alt="" srcset="" />
            </div>
            <div className=' absolute bottom-8 left-6'>
              <img src={img2} alt="" srcset="" />
            </div>
            <div className=' absolute top-36 left-48'>
              <img src={img3} alt="" srcset="" />
            </div>
            <div className=' absolute top-10 right-72'>
              <img src={img4} alt="" srcset="" />
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}

export default Home