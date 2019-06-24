import React, { Component } from 'react'
import './aboutme.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div className='aboutme-container' id='aboutme'>
                <div className='aboutme-header-container'>
                    <p className='aboutme-header'>ABOUT ME</p>
                    <p>On a mission to discover my next great technical endeavours</p>
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
                               Having <strong>3 years</strong> of experience in Front End Development using <strong>React, React-Native, Javascript, HTML, CSS, Bootstrap, SASS and other recent technologies </strong>
                               I am also working on developing <strong>Node, Express and Mongo</strong> to stride towards <strong>MERN Stack</strong> development. Apart from technical 
                               curiosities, there are a bundle of innovative ideas from my end which are reaching its destination just like developing this site.
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