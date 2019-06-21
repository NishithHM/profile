import React, { Component } from 'react'
import './skills.css'
import {SkillProgress} from '../UIElements'
import 'react-circular-progressbar/dist/styles.css';

export default class Skills extends Component {
    render() {
        return (
            <div className='skills-container' id='skills'>
                <div className='skills-header-container'>
                    <p className='skills-header'>SKILLS</p>
                    <p>To learn needs a passion, To expertise needs a dedication </p>
                </div>
                <div className='skills-details'/>
                <div className='skills-row'>
                <SkillProgress/>
                <SkillProgress/>
                <SkillProgress/>
                </div>
                <div className='skills-row'>
                <SkillProgress/>
                <SkillProgress/>
                <SkillProgress/>
                </div>


            </div>
        )
    }
}       