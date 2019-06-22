import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import './skillProgress.css'
function SkillProgress(props){
    return(
        <div className='skillprogress-container'>
            <CircularProgressbar value={props.value} text={props.value+'%'} className='crircular-progress'/>
            <div className='progress-info'>
                <p className='progress-title'>{props.tech}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
export default SkillProgress