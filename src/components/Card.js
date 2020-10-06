import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';
function Card(props) {
    return (
        <div className='row'>
            <div className='card' style={{ height: '100%' }}>
                <div className='row' style={{ width: '100%' }}>
                    <div className='card-subtopic'>
                        {props.subtopic}
                    </div>
                </div>
                <div className='row' style={{ width: '100%' }}>
                    <div className='card-topic' style={{ }}>
                        {props.topic}
                    </div>
                </div>
                <div className='row' style={{ width: '100%',paddingBottom: '10px' }}>
                    <div className='card-detail' style={{ }}>
                        {props.detail}
                    </div>
                </div>
                <div className='row' style={{ width: '88%', margin: 'auto' }}>
                    <img src={props.source} id={props.id} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className='row' style={{ width: '100%' }}>
                    <Link to={props.link} className='button'>
                        <div onClick='window.location.reload();'>{props.button}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card