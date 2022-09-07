import React from 'react'
import './skillcomponent.css'

export const SkillComponent = ({skill}) => {
    return (
        <div className="skill-component">
            <div className="skill-img">
                <img src={skill.img} alt="" />
            </div>
            <div className="skill-name">{skill.name}</div>
        </div>
    )
}
