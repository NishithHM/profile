import React from 'react'
import './tiles.css'
function Tiles(props){
    return(
        <div className='tiles-container'>
            <i className={props.icon+' fa-3x title-icon'}/>
            <p className='tile-title'>{props.title}</p>
            <p>{props.details}</p>
        </div>
    )
}
export default Tiles