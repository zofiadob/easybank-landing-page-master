import React from 'react'
import './images/bg-intro-mobile.svg'
import phones from './images/image-mockups.png'
import './RequestSection.css'

export default function RequestSection() {
  return (
    <section className='request-section'>
        <div className='phone-box'>
        <img className='phones' src={phones} alt='phones' />
        </div>
        <div className='text-section'>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
        <div className='button'>Request Invite</div>
        </div>
    </section>
  )
}
