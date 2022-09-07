import React from 'react'
import { useRef } from 'react'
import './contact.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { axiosInstance } from '../../config'

export const Contact = () => {
  const messageRef = useRef()
  const emailRef = useRef()
  const lastRef = useRef()
  const phoneRef = useRef()
  const firstRef = useRef()

  const [status, setStatus] = useState(false)

  const clickHandler = async (e) => {
    e.preventDefault()
    const data = {
      first: firstRef.current.value,
      last: lastRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      phone: phoneRef.current.value

    }
    try {
      const res = await axiosInstance.post('/contact', data)
      const json = await res.data
      setStatus(json.status)
      console.log(json.status)
      firstRef.current.value=""
       lastRef.current.value=""
      emailRef.current.value=""
       messageRef.current.value=""
      phoneRef.current.value=""
    } catch (error) {
      setStatus(false)
    }
    if (status) {
      Swal.fire({
        title: 'Good job',
        text: 'Your detail has been send.',
         icon: 'success',
        background:"black",
        color:"white"
      }
      )
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'There occured some error. please try later.',
         icon: 'error',
        background:"black",
        color:"white"
      }
      )
    }
  
}
return (
  <div className='contact' id='contact'>
    <div className="contactTop">
      <div className="contact-head">Contact Me</div>
      <div className="contact-box1">
        <div className="email-box">
          <h2>Email</h2>
          <h4>Yash.dce20@sot.pdpu.ac.in</h4>
        </div>
        <div className="phone-box">
          <h2>Phone</h2>
          <h4>(+91) 8780841384</h4>
        </div>
      </div>
    </div>
    <div className="fillForm">or you can fill this form....</div>
    <div className="contactSection">
      <form >

        <div className="contactSectionTop">
          <div className="firstName">
            <input type="text" placeholder='First Name' required ref={firstRef} />
          </div>
          <div className="lastname">
            <input type="text" placeholder='Last Name' required ref={lastRef} />
          </div>
        </div>
        <div className="contactSectionBottom">
          <div className="senderEmail">
            <input type="email" required placeholder='Email' ref={emailRef} />
          </div>
          <div className="senderPhone">
            <input type="text" placeholder='Phone' ref={phoneRef} required />
          </div>
        </div>
        <div className="contactSectionMid">
          <textarea cols="10" placeholder='Enter your message' ref={messageRef}></textarea>
        </div>
        <div className="contactSectionBtn">
          <button type='submit' className='submitBtn' onClick={clickHandler}>Submit Form</button>
        </div>
      </form>

    </div>
    <div className="contactBottom">
      <a href="https://twitter.com/YashPanchiwala"><img src="/images/twitter.png" alt="" /></a>
      <a href="https://www.linkedin.com/in/yash-panchiwala"><img src="/images/linkedin.png" alt="" /></a>
      <a href="https://github.com/Panchiwalayash"><img src="/images/github.png" alt="" /></a>
    </div>
  </div>
)
}
