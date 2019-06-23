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
                    <Tiles icon='fa fa-desktop' title='Web Development' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Tiles icon='fa fa-desktop' title='Web Development' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                    <Tiles icon='fa fa-desktop' title='Web Development' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                </div>
            </div>
        )
    }
}