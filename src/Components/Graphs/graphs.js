import React,{Component} from 'react'
import './graph.css'
import { GraphData } from '../UIElements';

export default class Graph extends Component{
    constructor(props){
        super(props)
        this.state={
            data1:5,
            data2:1600,
            data3:4,
            data4:4
        }
    }

render(){
    return(
        <div className='graph-container'>
            <div className='graph-data'>
            <GraphData data={this.state.data1} icon='fa fa-briefcase' info='Projects'/>
            <GraphData data={this.state.data2} icon='fa fa-clock-o' info='Hours of Work'/>
            <GraphData data={this.state.data3} icon='fa fa-trophy' info='Awards & Appreciations'/>
            <GraphData data={this.state.data4} icon='fa fa-smile-o' info='Happy Clients'/>
            </div>
        </div>
    )
}
}