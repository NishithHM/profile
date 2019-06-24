import React,{Component} from 'react';
import Typing from 'react-typing-animation'
import './banner.css'
import mouse from '../../assets/mouse.jpg'
let titleArray=['React Interactive Developer']
export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state={
            text:titleArray[0]
        }
    
    }
    render(){
        return(
            <div className='banner-component'>
                <div className='banner-header-nav'>
                   <a href='#aboutme' className='banner-links'>About</a>
                   <a href='#skills' className='banner-links'>Skills</a>
                   <a href='#services' className='banner-links'>Services</a>
                   <a href='#career' className='banner-links'>Career</a>
                   <a href='#contact' className='banner-links'>Contact</a>
                </div>
                <div className='banner-body'>
                <Typing cursorClassName='banner-cursor' className='banner-title' loop={true}>
                  <span className='banner-typewriter' id='title'>{this.state.text+'         '}</span>
                  <Typing.Backspace count={this.state.text.length+10} />
                </Typing>
                </div>
                <div className='banner-button' >
                <a href='#aboutme' className='banner-links'>More About Me</a>
                </div>

            </div>
        )
    }
}