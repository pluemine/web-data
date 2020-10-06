import React from 'react'
import './Public.css';

function Titlebar(props) {
    return (
        <div className='row title-box'>
            <div className='col-md-6 title'>
                {props.title}
            </div>
        </div>
    )
}

export default Titlebar