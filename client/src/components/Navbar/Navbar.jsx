import React from 'react'
import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import './navbar.css'

export const Navbar = ({menu,setMenu}) => {

  const [navbar,setNavbar]=useState(false)
  const handleClick=()=>{
    console.log("clicked")
    setMenu(!menu)
  }
const changeBg=()=>{
  if(window.scrollY>=70){
    setNavbar(true)
  }
  else{
    setNavbar(false)
    setMenu(false)
  }
}
window.addEventListener('scroll',changeBg)

  return (
    <>
    <div className={'navbar '+(navbar?'active':"")}>
        <div className="logo"><a href='https://www.linkedin.com/in/yash-panchiwala'>Yash Panchiwala</a></div>
        <div className="nav-content">
            <div className="nav-link" ><a href='#about'>About</a></div>
            <div className="nav-link" ><a href='#skill'>Skills</a></div>
            <div className="nav-link" ><a href='#project'>Projects</a></div>
            <div className="nav-link" ><a href='#contact'>Contact</a></div>

        </div> 
        <div className={"hamburger "+(menu?"active":"")} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menu && <Menu menu={menu} setMenu={setMenu}/>}
    </div>
    
    </>
  )
}
