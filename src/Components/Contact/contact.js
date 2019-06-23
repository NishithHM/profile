import React, { Component } from 'react'
import './contact.css'
import Axios from 'axios';

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:'',
            mail:'',
            message:'',
            error:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSumbmit=()=>{
        const{name, phone, mail, message}=this.state
        console.log(name,phone,mail,message)
        if(name===''||phone===''||mail===''||message==''){
            this.setState({
                error:true
            })
            return
        }
        Axios.post('http://localhost:8080/api/form',            
            {name,
            phone,
            mail,
            message}
        )
    }
    render() {
        return (
            <div className='contact-container' id='contact'>
                <div className='contact-header-container'>
                    <p className='contact-header'>Get Connected</p>
                    <p>Let us grow together</p>
                </div>
                <div className='details-container'>
                    <div className='mydetails'>
                        <div className='info-container'>
                            <p className='detail-header'>Details</p>
                            <p className='detiail-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Molestiae nobis, repellendus illo sed. Sed numquam libero, atque doloribus voluptate culpa
                        dignissimos hic ratione officiis facere possimus exercitationem illo. In, quae.</p>
                        <div>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span className='detail-marker'>Bangalore Karnataka, India</span>
                        </div>
                        <div>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <span className='detail-marker email' onClick={()=>window.location.href='tel:+919482067487'}>+919482067487</span>
                        </div>
                        <div>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span className='detail-marker email' onClick={()=>window.location.href = "mailto:nhm987@gmail.com?subject=Query from Nishtih Dev hub"}>nhm987@gmail.com</span>
                        </div>
                        <div>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <span className='detail-marker'>www.xyz.com</span>
                        </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                       <div className='form-container'>
                           {this.state.error ? (<p className='error-feild'>Enter all feilds</p>) :(null)}
                           <input type='text' className='form-input' placeholder='Your Name' id='name' value={this.state.name} onChange={this.handleChange}/>
                           <input type='number' className='form-input' placeholder='Your Phone' id='phone'value={this.state.phone} onChange={this.handleChange}/>
                           <input type='mail' className='form-input' placeholder='Your Mail' id='mail'value={this.state.mail} onChange={this.handleChange}/>
                           <textarea type='text' className='form-input message' placeholder='Your Message' id='message' value={this.state.message} onChange={this.handleChange}/>
                           <div className='form-button' onClick={this.handleSumbmit}>
                                <span>Send Message</span>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}