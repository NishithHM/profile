import React,{Component} from 'react';
import Typing from 'react-typing-animation'
import './banner.css'
import mouse from '../../assets/mouse.jpg'
let titleArray=['Hey Glad to see you here , I am Nishith and I develop React websites. You can have a look on all my contributions here. Please do look and, see you soon!!']
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
                   <a href='#' className='banner-links'>About</a>
                   <a href='#' className='banner-links'>Skills</a>
                   <a href='#' className='banner-links'>Services</a>
                   <a href='#' className='banner-links'>Porfolio</a>
                   <a href='#' className='banner-links'>Resume</a>
                   <a href='#' className='banner-links'>Contact</a>
                </div>
                <div className='banner-body'>
                <div className='banner-mouse'>
                    <img src={mouse} alt='mouse'/>
                </div>
                <Typing cursorClassName='banner-cursor' className='banner-title' loop={true}>
                  <span className='banner-typewriter' id='title'>{this.state.text+'   '}</span>
                  <Typing.Backspace count={this.state.text.length+4} />
                </Typing>
                </div>

            </div>
        )
    }
}