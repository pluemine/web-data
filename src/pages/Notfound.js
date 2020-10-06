import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Public.css';
import Sidebar from '../components/Sidebar';
import Titlebar from '../components/Titlebar';
import Card from '../components/Card';
import Cardduo from '../components/Cardduo';
import Cardduonobutton from '../components/Cardduonobutton';

function Notfound() {
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
                            <Titlebar title='Error' />
                            <div style={{ padding: '40px', paddingTop: '30px', paddingBottom: '20px' }}>
                                <Card subtopic='ERROR 404'
                                    topic='Page Not Found'
                                    detail=''
                                    source='cover-404.png'
                                    id='cover-404'
                                    link='/'
                                    button='Return to Home' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Notfound