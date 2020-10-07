import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className='row item' style={{ width: '100%', paddingTop: '60px', paddingBottom: '30px' }}>
                <Link to='/' className='row brand' style={{textDecoration: 'none' }}>
                    <div className='item-text' onClick='window.location.reload();' style={{fontWeight: 'bold' }}>SCH DESIGNED</div>
                </Link>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <a href='https://www.facebook.com/suchut.sapsathien.10' className='links'>
                    <div className='row'>
                        <div className='item-text'>Facebook</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>Suchut Sapsathien</div>
                    </div>
                </a>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <a href='https://www.twitter.com/pluemssn' className='links'>
                    <div className='row'>
                        <div className='item-text'>Twitter</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>pluemssn</div>
                    </div>
                </a>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <a href='https://www.instagram.com/pluemssn' className='links'>
                    <div className='row'>
                        <div className='item-text'>Instagram</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>pluemssn</div>
                    </div>
                </a>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <a href='https://www.github.com/pluemine' className='links'>
                    <div className='row'>
                        <div className='item-text'>Github</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>pluemine</div>
                    </div>
                </a>
            </div>
            <div className='row item' style={{ width: '100%', paddingBottom: '30px' }}>
                <a href='https://pluemine.github.io' className='links'>
                    <div className='row'>
                        <div className='item-text'>Website</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>pluemine.github.io</div>
                    </div>
                </a>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <div className='non-links'>
                    <div className='row'>
                        <div className='item-text'>Contact</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>092-256-8868</div>
                    </div>
                </div>
            </div>
            <div className='row item' style={{ width: '100%', paddingBottom: '30px' }}>
                <div className='non-links'>
                    <div className='row'>
                        <div className='item-text'>Email Address</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>pluem_ultimate@hotmail.com</div>
                    </div>
                </div>
            </div>
            <div className='row item' style={{ width: '100%' }}>
                <div className='non-links'>
                    <div className='row'>
                        <div className='item-text'>Website Status</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>Online</div>
                    </div>
                </div>
            </div>
            <div className='row item' style={{ width: '100%', paddingBottom: '60px' }}>
                <div className='non-links'>
                    <div className='row'>
                        <div className='item-text'>Latest Update</div>
                    </div>
                    <div className='row'>
                        <div className='item-sub-text'>07 Oct 2020</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar