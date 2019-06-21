import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import './skillProgress.css'
function SkillProgress(props){
    return(
        <div className='skillprogress-container'>
            <CircularProgressbar value='85' text='85%' className='crircular-progress'/>
            <div className='progress-info'>
                <p className='progress-title'>HTML5</p>
                <p>Lorem ipsum dolor sit amet consectetur elit sed</p>
            </div>
        </div>
    )
}
export default SkillProgress