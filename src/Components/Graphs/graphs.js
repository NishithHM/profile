import React,{Component} from 'react'
import './graph.css'
import { GraphData } from '../UIElements';

export default class Graph extends Component{
    constructor(props){
        super(props)
        this.state={
            data1:0,
            data2:0
        }
    }
    setGraph=()=>{
        this.setState({
            data1:100,
            data2:100
        })
    }
render(){
    return(
        <div className='graph-container' onMouseOver={this.setGraph}>
            <div className='graph-data'>
            <GraphData data={this.state.data1} icon='fa fa-briefcase' info='Clients'/>
            <GraphData data={this.state.data1} icon='fa fa-clock-o' info='Hours of Work'/>
            <GraphData data={this.state.data1} icon='fa fa-trophy' info='Awards & Appreciations'/>
            <GraphData data={this.state.data1} icon='fa fa-smile-o' info='Happy Clients'/>
            </div>
        </div>
    )
}
}