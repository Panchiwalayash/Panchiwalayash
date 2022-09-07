import React from 'react'
import { useState } from 'react'
import './projectcomponent.css'

export const ProjectComponent = ({ project }) => {

    const [expand, setExpand] = useState(false)
    return (
        <a className="hyperlink" href={project.link}>
            <div className={"project-component " + (expand ? "active" : "")} onMouseEnter={() => { setExpand(true) }} onMouseLeave={() => { setExpand(false) }} key={project.id}>
                <div className=
                    "project-img"><img className='img1' src={project.img} alt="" />
                </div>
                <div className="com-title">{project.title}</div>
                <div className="com-desc">{project.desc1}</div>
                <div className="com-desc">{project.desc2}</div>
                <div className="com-desc">{project.desc3}</div>
            </div>
        </a>
    )
} 
