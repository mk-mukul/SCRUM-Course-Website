import React, { useState } from 'react'
import whatsapp from '../assets/icons/whatsapp.png'
import call from '../assets/icons/call.png'
import dribbble from '../assets/icons/dribbble.png'
import facebook from '../assets/icons/facebook.png'
import figma from '../assets/icons/figma.png'
import smsDark from '../assets/icons/sms-dark.png'
import sms from '../assets/icons/sms.png'
import youtube from '../assets/icons/youtube.png'
import Icon from './Icon'

const Footer = () => {
    const [email, setEmail] = useState("")
    return (
        <footer className=' text-white bg-dark-background'>
            <div className=' px-4 md:px-16 lg:px-36 py-12 grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-28'>
                <div>
                    <h2 className=' font-bold text-2xl'>Logo</h2>
                    <p className='mt-3 text-dark-text'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <div className=' mt-6 grid lg:grid-cols-2 gap-4'>
                        <div className='flex gap-3'>
                            <Icon name="call" src={call} />
                            <div>
                                <p className='text-dark-text' >Have a question?</p>
                                <p className=' text-lg font-medium'>310-437-2766</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Icon name="sms" src={sms} />
                            <div>
                                <p className='text-dark-text' > Contact us at </p>
                                <p className=' text-lg font-medium'>unreal@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className=' font-bold text-xl'>Newsletter</h2>
                    <p className=' mt-3 text-dark-text'>Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                    <div className=' mt-6 p-2 rounded-full bg-dark-secondary flex justify-between'>
                        <div className=' px-5 flex'>
                            <div className=' w-6 self-center'>
                                <img src={smsDark} />
                            </div>
                            <input className=' w-36 md:w-40 bg-dark-secondary focus:outline-none' type="text" name='email' placeholder='Enter your email'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button onClick={()=>{alert(email?"Email:"+email+"\nSubmitted":"Enter email")}} className=' py-3 px-7 bg-dark-primary rounded-full text-sm cursor-pointer'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className=' pt-0.5 bg-dark-secondary' />
            <div className=' px-4 md:px-16 lg:px-36 py-10'>
                <ul className=' flex flex-wrap justify-between gap-x-4 gap-y-2 text-dark-text'>
                    <li className=' cursor-pointer'><a href="#">Aboutus</a></li>
                    <li className=' cursor-pointer'><a href="#">Jobs</a></li>
                    <li className=' cursor-pointer'><a href="#">Blog</a></li>
                    <li className=' cursor-pointer'><a href="#">Press</a></li>
                    <li className=' cursor-pointer'><a href="#">FAQ</a></li>
                    <li className=' cursor-pointer'><a href="#">Careers</a></li>
                    <li className=' cursor-pointer'><a href="#">Contact</a></li>
                    <li className=' cursor-pointer'><a href="#">Privacy policy</a></li>
                    <li className=' cursor-pointer'><a href="#">Sitemap</a></li>
                    <li className=' cursor-pointer'><a href="#">Terms of Use</a></li>
                </ul>
                <div className=' mt-8 flex flex-wrap justify-center md:justify-between items-center gap-8'>
                    <div className='flex gap-2'>
                        <Icon name="facebook" src={facebook} />
                        <Icon name="youtube" src={youtube} />
                        <Icon name="dribbble" src={dribbble} />
                        <Icon name="figma" src={figma} />
                        <Icon name="whatsapp" src={whatsapp} />
                    </div>
                    <div>
                        <p className='text-dark-text'> <span className=' text-lg'>©</span>2000-2021, All Right Reserved</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer