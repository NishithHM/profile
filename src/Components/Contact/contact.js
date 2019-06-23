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
            error:false,
            errorText:''
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
                error:true,
                errorText:'Do Enter all feilds'
            })
            return
        }
        Axios.post('http://localhost:8080/api/form',            
            {name,
            phone,
            mail,
            message}
        ).then(()=>{
            this.setState({
                error:true,
                errorText:'We have received your message, will revert shortly'
            })
        }).catch((e)=>[
            this.setState({
                error:true,
                errorText:'There exists some issue, triggering mail service, by the time we fix it, you can directly send us an email to :nhm987@gmail.com'
            })
        ])
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
                            <p className='detiail-info'>
                         Connecting together for a better purpose, always brings a fortune.<br/>
                         Let us get together, create, grow and make ourself great again!!!
                        </p>
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
                        <div>
                        <a className="fa fa-linkedin-square fa-3x social" aria-hidden="true" href='https://www.linkedin.com/in/nishith-hm-446235a0/' target='_blank'></a>
                        </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                       <div className='form-container'>
                           {this.state.error ? (<p className='error-feild'>{this.state.errorText}</p>) :(null)}
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