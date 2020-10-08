import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Public.css';
import Sidebar from '../components/Sidebar';
import Titlebar from '../components/Titlebar';
import Card from '../components/Card';
import Cardduo from '../components/Cardduo';
import Cardduonobutton from '../components/Cardduonobutton';

function Development() {
    return (
        <div>
            <section className='block'>
                <div className='container' align='center' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                    <div className='row board'>
                        <div className='col-md-12'>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <Sidebar />
                        </div>
                        <div className='col-sm-6 col-md-8 col-lg-9 page' style={{ borderRadius: '10px' }}>
                            <Titlebar title='Development' />
                            <div style={{ padding: '40px', paddingTop: '30px', paddingBottom: '20px' }}>
                                <Card subtopic='MEET THE DEVELOPER'
                                    topic='How I design? Learn more now'
                                    detail=''
                                    source='cover-design.png'
                                    id='cover-design'
                                    type=''
                                    link='/'
                                    button='Return to Home' />
                            </div>
                            <div className='row title-box'>
                                <div className='col-md-12 title'>
                                    Introducing
                                </div>
                            </div>
                            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                                <Cardduonobutton subtopic1='INTRODUCING'
                                    topic1='Dark mode is now live'
                                    detail1='You can switch back to the light mode anytime or use your system default.'
                                    source1='dev-darkmode.png'
                                    id1='dev-darkmode'
                                    subtopic2='INTRODUCING'
                                    topic2='Your favourite color'
                                    detail2='There are some of selected gradient wallpaper for you. You can try it.'
                                    source2='dev-wall.png'
                                    id2='dev-wall' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Development