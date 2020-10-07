import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';

function Cardduo(props) {
    return (
        <div className='row'>
            <div className='col-md-6' style={{ width: '100%', paddingTop: '10px', paddingBottom: '20px' }}>
                <div className='card' style={{ height: '100%' }}>
                    <div className='row'>
                        <div className='card-subtopic'>
                            {props.subtopic1}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card-topic' style={{}}>
                            {props.topic1}
                        </div>
                    </div>
                    <div className='row' style={{ paddingBottom: '10px' }}>
                        <div className='card-detail' style={{}}>
                            {props.detail1}
                        </div>
                    </div>
                    <div className='row' style={{ width: '88%', margin: 'auto' }}>
                        <img src={props.source1} id={props.id1} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className='row'>
                        { props.type1 != 'ext' ? (
                        <Link to={props.link1} className='button' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <div>{props.button1}</div>
                        </Link>) :
                        <a href={props.link1} className='button' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <div>{props.button1}</div>
                        </a> }
                    </div>
                </div>
            </div>
            <div className='col-md-6' style={{ width: '100%', paddingTop: '10px', paddingBottom: '20px' }}>
            <div className='card' style={{ height: '100%' }}>
                    <div className='row'>
                        <div className='card-subtopic'>
                            {props.subtopic2}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card-topic' style={{}}>
                            {props.topic2}
                        </div>
                    </div>
                    <div className='row' style={{ paddingBottom: '10px' }}>
                        <div className='card-detail' style={{}}>
                            {props.detail2}
                        </div>
                    </div>
                    <div className='row' style={{ width: '88%', margin: 'auto' }}>
                        <img src={props.source2} id={props.id2} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className='row'>
                        { props.type2 != 'ext' ? (
                        <Link to={props.link2} className='button' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <div>{props.button2}</div>
                        </Link>) :
                        <a href={props.link2} className='button' style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <div>{props.button2}</div>
                        </a> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardduo