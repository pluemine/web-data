import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Public.css';
import Sidebar from '../components/Sidebar';
import Titlebar from '../components/Titlebar';

function Home() {
    return (
        <div>
            <section className='block'>
                <div className='banner' align='center'>
                    By continuing to use our website, you are accepting to our website policy.
                </div>
            </section>
            <section className='block'>
                <div className='container' align='center' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                    <div className='row board'>
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <Sidebar />
                        </div>
                        <div className='col-sm-6 col-md-8 col-lg-9 page' style={{ borderRadius: '10px' }}>
                            <Titlebar />
                            <div className='row' style={{ padding: '40px' }}>
                                <div className='card'>
                                    <div className='row' style={{ width: '100%', margin: 'auto' }}>
                                        <div className='card-subtopic'>
                                            FEATURED TOPIC
                                        </div>
                                    </div>
                                    <div className='row' style={{ width: '100%', margin: 'auto' }}>
                                        <div className='card-topic'>
                                            Meet our extraordinary Portfolio
                                        </div>
                                    </div>
                                    <div className='row' style={{ width: '100%', margin: 'auto' }}>
                                        <img src='card-allport.png' style={{ height: '100%', width: '100%' }} />
                                    </div>
                                    <div className='row' style={{ width: '100%' }}>
                                        <Link className='button'>
                                            Portfolio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ padding: '20px' }}>
                                <div className='col-md-6' style={{ width: '100%' }}>
                                    <div className='card' style={{ height: '100%' }}>
                                        <div className='row' style={{ width: '100%' }}>
                                            <div className='card-topic' style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                                Introducing new Portfolio Template
                                            </div>
                                        </div>
                                        <div className='row' style={{ width: '88%', margin: 'auto' }}>
                                            <img src='template-1.png' style={{ height: '100%', width: '100%' }} />
                                        </div>
                                        <div className='row' style={{ width: '100%' }}>
                                            <a href='template-1/index.html' className='button'>
                                                Template
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6' style={{ width: '100%' }}>
                                    <div className='card' style={{ height: '100%' }}>
                                        <div className='row' style={{ width: '100%' }}>
                                            <div className='card-topic' style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                                Something is coming? Check out new update here!
                                            </div>
                                        </div>
                                        <div className='row' style={{ width: '88%', margin: 'auto' }}>
                                            <img src='card-creation.png' style={{ height: '100%', width: '100%' }} />
                                        </div>
                                        <div className='row' style={{ width: '100%' }}>
                                            <Link className='button'>
                                                Blog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block'>
                <div className='banner' align='center'>
                    © 2020 SCH DESIGNED
                </div>
            </section>
        </div>
    )
}

export default Home