import React from 'react'
import logo from './images/logo-white.svg'
import facebook from './images/icon-facebook.svg'
import youtube from './images/icon-youtube.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'
import './css/Footer.css'


export default function Footer() {
  return (
    <footer>
        <img className='logo' src={logo} alt='logo'/>

        <div className='social-icons'>
        <img className='icon' src={facebook} alt='fb-icon'/>
        <img className='icon' src={youtube} alt='yt-icon'/>
        <img className='icon' src={twitter} alt='tw-icon'/>
        <img className='icon' src={pinterest} alt='pin-icon'/>
        <img className='icon' src={instagram} alt='inst-icon'/>
        </div>

        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
        </ul>

        <div className='button footer-button'>Request Invite</div>

        <p className='copyright'>© Easybank. All Rights Reserved</p>
        
        <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/zofiadob">Zofia Dobrowolska</a>.
  </div>
    </footer>
    
  )
}
