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
                <SkillProgress tech='HTML 5' value='70' desc='using HTML 5 for all the React JS'/>
                <SkillProgress tech='React' value='85' desc='Certified(TESTDOME) in React world top 25%'/>
                <SkillProgress tech='CSS/SASS' value='60' desc='Latest CSS technologies'/>
                </div>
                <div className='skills-row'>
                <SkillProgress tech='Bootsstrap' value='70' desc='Used latest Bootsrap and React Bootstrap'/>
                <SkillProgress tech='Javascript' value='80' desc='Deep knowledge in Javascript and relavent Libraries'/>
                <SkillProgress tech='Node JS' value='30' desc='putting baby steps towards backend technologies'/>
                </div>

            </div>
        )
    }
}       