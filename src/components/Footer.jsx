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
            <div className=' px-36 py-12 grid grid-cols-2 gap-28'>
                <div>
                    <h2 className=' font-bold text-2xl'>Logo</h2>
                    <p className='mt-3 text-dark-text'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <div className=' mt-6 grid grid-cols-2 gap-4'>
                        <div className='flex gap-3'>
                            <Icon src={call} />
                            <div>
                                <p className='text-dark-text' >Have a question?</p>
                                <p className=' text-lg font-medium'>310-437-2766</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Icon src={sms} />
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
                            <div className=' self-center'>
                                <img src={smsDark} />
                            </div>
                            <input className=' px-2 bg-dark-secondary focus:outline-none' type="text" name='email' placeholder='Enter your email'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className=' py-3 px-7 bg-dark-primary rounded-full text-sm cursor-pointer'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className=' pt-0.5 bg-dark-secondary' />
            <div className='px-36 py-10'>
                <ul className=' flex justify-between gap-1 text-dark-text'>
                    <li>Aboutus</li>
                    <li>Jobs</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li>Privacy policy</li>
                    <li>Sitemap</li>
                    <li>Terms of Use</li>
                </ul>
                <div className=' mt-8 flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Icon src={facebook} />
                        <Icon src={youtube} />
                        <Icon src={dribbble} />
                        <Icon src={figma} />
                        <Icon src={whatsapp} />
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