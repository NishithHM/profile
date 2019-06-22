import React from 'react'
import CountUp from 'react-countup';
import './timeline.css'
function Timeline(props) {
    return (
        <div className='timeline-container'>
            <div className='timeline-details'>
                <div className='resume-round'>
                    <i className={props.icon + ' fa-3x bubble'} />
                    <p className='bubble-text'>{props.bubbleText}</p>
                    <div className='timeline-company'>
                        {props.company}
                    </div>
                </div>
                <div className='timeline-role'>{props.role}</div>
            </div>
            <div className='timeline-line' />
        </div>
    )
}
export default Timeline