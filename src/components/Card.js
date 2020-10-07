import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className='row'>
            <div className='card' style={{ height: '100%' }}>
                <div className='row'>
                    <div className='card-subtopic'>
                        {props.subtopic}
                    </div>
                </div>
                <div className='row'>
                    <div className='card-topic'>
                        {props.topic}
                    </div>
                </div>
                <div className='row' style={{ paddingBottom: '10px' }}>
                    <div className='card-detail'>
                        {props.detail}
                    </div>
                </div>
                <div className='row' style={{ width: '88%', margin: 'auto' }}>
                    <img src={props.source} id={props.id} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className='row'>
                    { props.type != 'ext' ? (
                    <Link to={props.link} className='button' style={{ marginLeft: '30px', marginRight: '30px' }} >
                        <div>{props.button}</div>
                    </Link>) :
                    <a href={props.link} className='button' style={{ marginLeft: '30px', marginRight: '30px' }}>
                        <div>{props.button}</div>
                    </a> }
                </div>
            </div>
        </div>
    )
}

export default Card