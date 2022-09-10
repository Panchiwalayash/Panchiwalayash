import React from 'react'
import { useRef } from 'react'
import './contact.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { axiosInstance } from '../../config'
import ClipLoader from "react-spinners/ClipLoader";

export const Contact = () => {

  // Taking the value of the form with the help of useRef react hook
  const messageRef = useRef()
  const emailRef = useRef()
  const lastRef = useRef()
  const phoneRef = useRef()
  const firstRef = useRef()

  // using useState hook for displaying loading icon while submit form process is in progress
  const [loading, setLoading] = useState(false)

  // on clickling submit we are making connection with backend server
  const clickHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      first: firstRef.current.value,
      last: lastRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      phone: phoneRef.current.value

    }
    // using try catch for catching errors
    try {
      const res = await axiosInstance.post('/contact', data)
      const json = await res.data
      const success = json.status
      setLoading(false)
      console.log(json.status)
      firstRef.current.value = ""
      lastRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
      phoneRef.current.value = ""
      if (success === "true") {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your detail has been send.',
          icon: 'success',
          background: "black",
          color: "white"
        }
        )
      }
      else {
        Swal.fire({
          title: 'error',
          text: 'There is some error. Please try again later.',
          icon: 'error',
          background: "black",
          color: "white"
        }
        )
      }
    } catch (error) {
      Swal.fire({
        title: 'error',
        text: 'There is some error. Please try again later.',
        icon: 'error',
        background: "black",
        color: "white"
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
            {loading ? <><ClipLoader color='white' size={22} /><span style={{
              "marginLeft": "10px", "fontSize": "22px"
            }}>Sending...</span></> : <button type='submit' className='submitBtn' onClick={clickHandler}>Submit form</button>}
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
