import React, { Component } from 'react'
import './aboutme.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div className='aboutme-container' id='aboutme'>
                <div className='aboutme-header-container'>
                    <p className='aboutme-header'>ABOUT ME</p>
                    <p>Young blood, Deep passion to code and developing dream to acheive!!! </p>
                </div>
                <div className='aboutme-body'>
                    <div className='aboutme-profile'>
                        <div className='aboutme-pic' />
                    </div>
                    <div className='aboutme-description'>
                        <div className='aboutme-content'>
                            <span className='aboutme-name'>Nishith HM</span><br />
                            <span className='aboutme-role'>React Interactive Developer</span>
                            <p className='aboutme-about'>
                               Having <strong>3 years</strong> of experience in Front end development using <strong>React Javascript HTML CSS Bootstrap Sass and other recent technologies </strong>
                               ,I am also working on developing <strong>Node, Express and Mongo</strong> to stride towards <strong>MERN Stack</strong> development. Apart from technical 
                               hunger there are lot of innovative ideas revolve arround my head and some are finding the results (Just Like developing this Site).
                            </p>
                            <div className='aboutme-resume' onClick={()=>document.getElementById('resumeLink').click()}>
                                <a id='resumeLink' className='aboutme-resume-link' href='https://drive.google.com/file/d/1eG2TaQs0Tsl_Ja2-c-0QvO9AeUXpr9Ab/view?usp=sharing' target='_blank'>Download Resume</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}