import React from 'react'
import './project.css'
import { projectsData } from '../../data'
import { ProjectComponent } from '../ProjectComponent/ProjectComponent/ProjectComponent'

export const Project = () => {
  return (
    <div className='project' id='project'>
        <div className="projectContainer">
            <div className="title">Projects</div>
            <div className="desc">Here are my personal projects.</div>
            <div className="desc">Click on the card to see source code on Github.</div>
            <div className="project-section">
                {projectsData.map(item=>(
                    <ProjectComponent project={item} key={item.id}/>
                ))}
            </div>
            <div className="projectBottom">
              <div className='project-bottom-head'>Visit my projects on Github</div>
            <a href="https://github.com/Panchiwalayash" className="project-link"><img src="/images/github.png" alt="" /><span>Github</span></a>
            </div>
        </div>
    </div>
  )
}
