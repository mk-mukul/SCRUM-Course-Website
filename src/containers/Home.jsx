import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import TimeCard from '../components/TimeCard'
import img1 from '../assets/images/Ellipse 1.png'
import img2 from '../assets/images/Ellipse 2.png'
import img3 from '../assets/images/Ellipse 3.png'
import img4 from '../assets/images/Ellipse 4.png'
import unsplash1 from '../assets/images/unsplash1.png'
import unsplash2 from '../assets/images/unsplash1.png'
import unsplash3 from '../assets/images/unsplash3.png'
import training from '../assets/icons/training.png'
import view from '../assets/icons/view.png'
import lesson from '../assets/icons/lesson.png'
import chalkboard from '../assets/icons/chalkboard.png'
import exam from '../assets/icons/exam.png'
import leftArrow from '../assets/icons/left-arrow.png'
import rightArrow from '../assets/icons/right-arrow.png'
import HomeCard from '../components/HomeCard'
import HomeIcon from '../components/HomeIcon'

const Home = () => {
  const [hour, setHour] = useState(3)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(15)
  useEffect(() => {
    setInterval(() => {
      setSecond((prev)=>{
        if (prev==0) {
          setMinute((prev)=>{
            if (prev==0) {
              setHour((prev)=>{return prev!=0?prev-1:11});
              return 59;
            }
            return prev-1;
          })
          return 59;
        }
        return prev-1;
      })
    }, 1000);
  }, [])
  
  return (
    <main className='bg-white overflow-x-hidden'>
      <section className='grid pt-16 md:pt-28 lg:pt-48 md:grid-cols-2 gap-28 bg-purple px-4 md:px-10 lg:px-20 text-white'>
        <div className=' pb-20 flex flex-col pt-16 my-4'>
          <div className='flex'>
            <p className=' px-4 md:px-5 text-sm md:text-base py-1 bg-white text-purple opacity-95 rounded-full'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
          </div>
          <div className=' mt-8 text-3xl md:text-4xl font-bold'>
            <p>Unleash Your SCRUM Skill, Grab More Attention To Resume</p>
          </div>
          <div className='flex mt-8'>
            <Button className="hover:text-purple hover:bg-white transition-all" text="ENROLL NOW" />
          </div>
          <div>
            <div className='mt-8 py-10 flex flex-col items-center w-max'>
              <p className=' font-semibold'>10% OFF on all cources*|Offer Valid For</p>
              <div className=' mt-1 h-0.5 w-14 bg-white'></div>
              <div className='flex gap-8 mt-3'>
                <TimeCard label="Hrs." value={hour<10?"0"+hour:hour} />
                <TimeCard label="Mins." value={minute<10?"0"+minute:minute} />
                <TimeCard label="Secs." value={second<10?"0"+second:second} />
              </div>
            </div>
          </div>
        </div>

        <div className=' relative mt-6'>
          <div className=' w-72 md:w-96 lg:w-auto absolute -bottom-12 md:-bottom-18 lg:-bottom-20 -right-20 md:-right-28 lg:-right-48'>
            <img src={img1} alt="" />
          </div>
          <div className=' w-24 md:w-36 lg:w-auto absolute bottom-4 md:bottom-6 lg:bottom-8 md:-left-6 lg:left-24'>
            <img src={img2} alt="" />
          </div>
          <div className=' w-12 md:w-24 lg:w-auto absolute bottom-36 md:bottom-52 lg:top-44 left-12 md:left-8 lg:left-52'>
            <img src={img3} alt="" />
          </div>
          <div className=' w-6 md:w-16 lg:w-auto absolute bottom-52 md:bottom-80 lg:top-12 left-28 md:left-36 lg:left-96'>
            <img src={img4} alt="" />
          </div>
        </div>
      </section>

      <section className=' px-4 md:px-10 lg:px-16 mt-24 mb-8'>
        <h2 className=' text-lg font-bold'>A broad range of courses</h2>
        <h3 className=' mt-3 text-base md:text-lg'>Choose from 100+ online video courses with new additions published every month</h3>
        <div className=' flex gap-20 justify-between items-center'>
          <div className=' w-full grid gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-x-scroll px-4 md:px-8 py-16'>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
          <div className=' hidden cursor-pointer justify-self-end'>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </section>

      <section className='px-4 md:px-10 lg:px-16'>
        <div className=' md:px-6 lg:px-14 grid items-center gap-y-16 md:grid-cols-2'>
          <div>
            <h1 className=' w-96 md:pr-12 text-purple text-4xl font-semibold'>Start learning with us right now!</h1>
            <p className=' mt-3 w-72'>Choose from 100+ online video courses with new updates.</p>
            <div className='flex mt-6'>
              <Button className="text-blue border-blue hover:text-white hover:bg-blue transition-all" text="ENROLL NOW" />
            </div>
          </div>
          <div className='flex items-center md:justify-center lg:gap-x-10'>
            <div className='grid justify-center gap-y-16'>
              <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 items-center'>
                <h3 className=' font-bold w-min text-orange'>Live Exams</h3>
                <HomeIcon className=" bg-orange" src={exam} />
              </div>
              <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 items-center'>
                <h3 className=' font-bold w-min text-skyBlue'>Live Classes</h3>
                <HomeIcon className=" bg-skyBlue" src={training} />
              </div>
              <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 items-center'>
                <h3 className=' font-bold w-min text-red'>100K+ Views</h3>
                <HomeIcon className=" bg-red" src={view} />
              </div>
            </div>

            <div className='grid justify-center gap-y-16'>
              <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 items-center'>
                <h3 className=' font-bold w-min text-maroon'>1000+ Lessons</h3>
                <HomeIcon className=" bg-maroon" src={lesson} />
              </div>
              <div className='flex justify-between gap-1 md:gap-3 lg:gap-6 items-center'>
                <h3 className=' font-bold w-min text-green'>1000+ Lessons</h3>
                <HomeIcon className=" bg-green" src={chalkboard} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 md:px-20 lg:px-32 pt-24'>
        <div className='flex items-center justify-start gap-16'>
          <h1 className=' text-xl font-bold text-blue'>OUR TESTIMONIALS</h1>
          <div className=' h-0.5 bg-blue md:px-56' />
        </div>
        <div className=' pt-14 pb-10 flex gap-10 justify-between items-center'>
          <div className=' hidden md:block cursor-pointer'><img src={leftArrow} alt="left arrow" /></div>
          <div className=' text-center'>
            <div className=' mb-16 flex justify-center items-center gap-8'>
              <div className=' opacity-25'>
                <img width={75} src={unsplash1} alt="unsplash" />
              </div>
              <img src={unsplash2} alt="unsplash" />
              <div className=' opacity-25'>
                <img width={75} src={unsplash3} alt="unsplash" />
              </div>
            </div>
            <p className=' md:max-w-2xl'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            <div className=' pt-8 text-purple'>
              <h4 className=' font-bold text-lg'>Md. Danish Ansari</h4>
              <p className=' font-semibold'>Learner, Govt. Employee @UPPCL</p>
            </div>
          </div>
          <div className=' hidden md:block cursor-pointer'><img src={rightArrow} alt="right arrow" /></div>
        </div>
      </section>

      <section className=' px-4 md:px-10 lg:px-16 py-24'>
        <div className=' flex flex-col gap-2 md:flex-row justify-between items-center rounded-xl px-4 md:px-8 lg:px-12 py-2 md:py-4 lg:py-8 bg-blue text-white'>
          <div className=' grid gap-2'>
            <h4 className=' font-bold text-xl'>Email Us</h4>
            <p>Connect with us in case of any queries, complaints or feedbacks...</p>
          </div>
          <div className=' rounded-xl cursor-pointer text-white font-bold px-16 md:px-12 lg:px-28 py-4 bg-skyBlue'>
            CONTACT US
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home