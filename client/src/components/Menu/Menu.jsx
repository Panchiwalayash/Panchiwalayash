import React from 'react'
import './menu.css'

export const Menu = ({menu,setMenu}) => {
  const handleClick=()=>{
    console.log("clicked")
    setMenu(!menu)
  }
  return (
    <div className={'menu '+(menu?"active":"")}>
        <div className="menu-link" onClick={handleClick}><a href='#home'>Home</a></div>
        <div className="menu-link" onClick={handleClick}><a href='#about'>About</a></div>
            <div className="menu-link" onClick={handleClick}><a href='#skill'>Skills</a></div>
            <div className="menu-link" onClick={handleClick}><a href='#project'>Projects</a></div>
            <div className="menu-link" onClick={handleClick}><a href='#contact'>contact</a></div>

    </div>

  )
}
