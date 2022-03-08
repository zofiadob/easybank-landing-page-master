import logo from './images/logo.svg'
import ham from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
import './css/Navbar.css'
import { useState } from 'react'


export default function Navbar(props){
    const [ifHam, setIfHam] = useState(true);

    return(
        <>
        <nav>
            <div className='logo-box'>
            <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='ham-box'>
            <img className='ham-icon' src={ifHam ? ham : close} alt='ham-icon' onClick={() => setIfHam(!ifHam)}/>
            </div>
        </nav>

        <div className={ifHam ? 'ham-list' : 'ham-list ham-list-show'}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </>
    )
}