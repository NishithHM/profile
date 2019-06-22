import React from 'react'
import CountUp from 'react-countup';
import './data.css'
function GraphData(props){
    return(
        <div className='data-container'>
        <i className={props.icon+' fa-4x'+' data-icon'}/>
        <CountUp end={props.data} className='data-coutup'/>
        <p className='data-icon'>{props.info}</p>
        </div>
    )
}
export default GraphData