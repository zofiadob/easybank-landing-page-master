import React from 'react'
import './images/icon-api.svg'
import './images/icon-budgeting.svg'
import './images/icon-online.svg'
import './images/icon-onboarding.svg'
import './css/FunctionBox.css'

export default function FunctionBox(props) {

    const {
        imgSrc,
        headerText,
        descText
    } = props

  return (
    <section className='function-box'>
        <img src={imgSrc} alt='func-icon'/>
        <h3>{headerText}</h3>
        <p>{descText}</p>
        </section>
  )
}
