import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div className='home' id='home'>
            <img src="/images/home.jpg" alt="" />
            <div className="container">
                <div className="head">Hi i am Yash Panchiwala</div>
                 <div className="content">I am a computer science student passionate about coding and design.</div>  
            </div>
            <a className="projectBtn"  href='#project'>My Work</a>
    </div>
  )
}
