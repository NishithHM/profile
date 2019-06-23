import React, { Component } from 'react';
import './services.css'
import { Tiles } from '../UIElements';

export default class Services extends Component {
    render() {
        return (
            <div className='services-container' id='services'>
                <div className='aboutme-header-container'>
                    <p className='aboutme-header'>Services</p>
                    <p>Delivering Quality Product within a Realistic timelines </p>
                </div>
                <div className='services-details'>
                    <Tiles icon='fa fa-desktop' title='Web Development' details='Developing font end application from scratch till production.'/>
                    <Tiles icon='fa fa-ticket' title='Web Development Support' details='Support and code maintenance of projects once deployed'/>
                    <Tiles icon='fa fa-medkit' title='Defect and Code fixes' details='Provide quick and robust code/bug fixes for the developed application.'/>
                </div>
            </div>
        )
    }
}