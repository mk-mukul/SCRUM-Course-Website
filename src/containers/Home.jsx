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
      <section className='grid grid-cols-2 gap-28 bg-purple px-20 text-white'>
        <div className=' flex flex-col py-16 my-4'>
          <div className='flex'>
            <p className=' px-5 py-1 bg-white text-purple opacity-95 rounded-full'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
          </div>
          <div className=' mt-8 text-4xl font-bold'>
            <p>Unleash Your SCRUM Skill,</p>
            <p>Grab More Attention To Resume</p>
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

        <div className=' relative'>
          <div className=' absolute -bottom-20 -right-48'>
            <img src={img1} alt="" />
          </div>
          <div className=' absolute bottom-8 left-24'>
            <img src={img2} alt="" />
          </div>
          <div className=' absolute top-44 left-52'>
            <img src={img3} alt="" />
          </div>
          <div className=' absolute top-12 left-96'>
            <img src={img4} alt="" />
          </div>
        </div>
      </section>

      <section className='px-16 mt-24 mb-8'>
        <h2 className=' text-lg font-bold'>A broad range of courses</h2>
        <h3 className=' mt-3 text-lg'>Choose from 100+ online video courses with new additions published every month</h3>
        <div className=' flex gap-20 justify-between items-center'>
          <div className=' w-full grid gap-8 grid-cols-4 overflow-x-scroll py-16'>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
          <div className=' cursor-pointer justify-self-end'>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </section>

      <section className='px-16'>
        <div className=' px-14 grid items-center gap-20 grid-cols-2'>
          <div>
            <h1 className=' w-96 pr-12 text-purple text-4xl font-semibold'>Start learning with us right now!</h1>
            <p className=' mt-3 w-72'>Choose from 100+ online video courses with new updates.</p>
            <div className='flex mt-6'>
              <Button className="text-blue border-blue hover:text-white hover:bg-blue transition-all" text="ENROLL NOW" />
            </div>
          </div>
          <div className='grid items-center gap-x-16 grid-cols-2'>
            <div className='grid gap-16'>
              <div className='flex justify-between gap-6 items-center'>
                <h3 className=' font-bold w-min text-orange'>Live Exams</h3>
                <HomeIcon className=" bg-orange" src={exam} />
              </div>
              <div className='flex justify-between gap-6 items-center'>
                <h3 className=' font-bold w-min text-skyBlue'>Live Classes</h3>
                <HomeIcon className=" bg-skyBlue" src={training} />
              </div>
              <div className='flex justify-between gap-6 items-center'>
                <h3 className=' font-bold w-min text-red'>100K+ Views</h3>
                <HomeIcon className=" bg-red" src={view} />
              </div>
            </div>

            <div className='grid gap-16'>
              <div className='flex justify-between gap-6 items-center'>
                <h3 className=' font-bold w-min text-maroon'>1000+ Lessons</h3>
                <HomeIcon className=" bg-maroon" src={lesson} />
              </div>
              <div className='flex justify-between gap-6 items-center'>
                <h3 className=' font-bold w-min text-green'>1000+ Lessons</h3>
                <HomeIcon className=" bg-green" src={chalkboard} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-32 pt-24'>
        <div className='flex items-center gap-16'>
          <h1 className=' text-xl font-bold text-blue'>OUR TESTIMONIALS</h1>
          <div className=' h-0.5 bg-blue px-56' />
        </div>
        <div className=' pt-14 pb-10 flex gap-80 justify-between items-center'>
          <div className=' cursor-pointer'><img width={80} src={leftArrow} alt="left arrow" /></div>
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
            <p className=' px-32'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            <div className=' pt-8 text-purple'>
              <h4 className=' font-bold text-lg'>Md. Danish Ansari</h4>
              <p className=' font-semibold'>Learner, Govt. Employee @UPPCL</p>
            </div>
          </div>
          <div className=' cursor-pointer'><img width={80} src={rightArrow} alt="right arrow" /></div>
        </div>
      </section>

      <section className='px-16 py-24'>
        <div className=' flex justify-between items-center rounded-xl px-12 py-8 bg-blue text-white'>
          <div className=' grid gap-2'>
            <h4 className=' font-bold text-xl'>Email Us</h4>
            <p>Connect with us in case of any queries, complaints or feedbacks...</p>
          </div>
          <div className=' rounded-xl cursor-pointer text-white font-bold px-28 py-4 bg-skyBlue'>
            CONTACT US
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home