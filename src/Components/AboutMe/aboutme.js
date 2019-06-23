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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laborum perferendis nulla illum sunt atque quidem ut, dolor. Suscipit blanditiis commodi a soluta itaque quae omnis, velit voluptas voluptatum repudiandae.
    
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iste incidunt, et nam pariatur sit totam quos id ex dolorem deleniti, autem tempore eaque dolores quibusdam obcaecati, veritatis mollitia consequuntur.
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