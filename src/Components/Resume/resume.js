import React, { Component } from 'react'
import './resume.css'
import { Timeline } from '../UIElements';

export default class Resume extends Component {
    render() {
        return (
            <div className='resume-container' id='career'>
                <div className='resume-header-container'>
                    <p className='aboutme-header'>Careers</p>
                    <p>The path for getting right here!! </p>
                </div>
                <div className='resume-timeline'>
                    <Timeline icon='fa fa-briefcase'bubbleText='Jan 2019-Present' company='Mobinius' role='Senoir Software Developer'/>
                    <Timeline icon='fa fa-free-code-camp' bubbleText='Oct-2016-Jan 2019' company='Freelancing' role='Front-End-Developer'/>
                    <Timeline icon='fa fa-briefcase' bubbleText='Aug-2016-Oct 2018' company='Tech Mahindra' role='Software Engineer'/>            
                    <Timeline icon='fa fa-graduation-cap' bubbleText={'2012-2016'} company='KSIT Bangalore' role='Engineering under VTU'/>
                </div>
            </div>
        )
    }
}