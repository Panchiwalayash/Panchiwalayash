import React from 'react'
import { SkillComponent } from '../SkillComponent/SkillComponent'
import './skill.css'
import { skillsData } from "../../data"

export const Skill = () => {
  return (
    <div className='skill' id='skill'>
        <div className="skillContainer">
            <div className="title">Skills</div>
            <div className="desc">Here are some of my skills and I am looking forward to learn more.</div>
            <div className="skill-section">
                {skillsData.map(item=>(
                    <SkillComponent key={item.id} skill={item}/>
                ))}
            </div>
        </div>
    </div>
  )
}
