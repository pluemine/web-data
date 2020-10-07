import React from 'react'
import './Public.css';

function setwallpaper1() {
    localStorage.setItem('wallpaper-mode', 'wallpaper1');
    document.getElementById("setwallpaper1btn").disabled = true;
    document.getElementById("setwallpaper2btn").disabled = false;
    document.getElementById("setwallpaper3btn").disabled = false;
    document.getElementById("setwallpaper4btn").disabled = false;
    if (document.documentElement.getAttribute('data-wallpaper') != 'wallpaper1') {
        document.documentElement.setAttribute('data-wallpaper', 'wallpaper1');
        localStorage.setItem('wallpaper', 'wallpaper1');
    }
}

function setwallpaper2() {
    localStorage.setItem('wallpaper-mode', 'wallpaper2');
    document.getElementById("setwallpaper1btn").disabled = false;
    document.getElementById("setwallpaper2btn").disabled = true;
    document.getElementById("setwallpaper3btn").disabled = false;
    document.getElementById("setwallpaper4btn").disabled = false;
    if (document.documentElement.getAttribute('data-wallpaper') != 'wallpaper2') {
        document.documentElement.setAttribute('data-wallpaper', 'wallpaper2');
        localStorage.setItem('wallpaper', 'wallpaper2');
    }
}

function setwallpaper3() {
    localStorage.setItem('wallpaper-mode', 'wallpaper3');
    document.getElementById("setwallpaper1btn").disabled = false;
    document.getElementById("setwallpaper2btn").disabled = false;
    document.getElementById("setwallpaper3btn").disabled = true;
    document.getElementById("setwallpaper4btn").disabled = false;
    if (document.documentElement.getAttribute('data-wallpaper') != 'wallpaper3') {
        document.documentElement.setAttribute('data-wallpaper', 'wallpaper3');
        localStorage.setItem('wallpaper', 'wallpaper3');
    }
}

function setwallpaper4() {
    localStorage.setItem('wallpaper-mode', 'wallpaper4');
    document.getElementById("setwallpaper1btn").disabled = false;
    document.getElementById("setwallpaper2btn").disabled = false;
    document.getElementById("setwallpaper3btn").disabled = false;
    document.getElementById("setwallpaper4btn").disabled = true;
    if (document.documentElement.getAttribute('data-wallpaper') != 'wallpaper4') {
        document.documentElement.setAttribute('data-wallpaper', 'wallpaper4');
        localStorage.setItem('wallpaper', 'wallpaper4');
    }
}

const currentWallpaper = localStorage.getItem('wallpaper') ? localStorage.getItem('wallpaper') : null;
if (currentWallpaper) {
    document.documentElement.setAttribute('data-wallpaper', currentWallpaper);
}

function Bottombar() {
    return (
        <nav className='container' style={{ paddingBottom: '30px' }}>
            <div className='row mynav' style={{}}>
                <div className='navbottom-block' style={{ width: '240px' }}>
                    <button className='switchwall' id='setwallpaper1btn' onClick={setwallpaper1}
                        style={{ background: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)' }} />
                    <button className='switchwall' id='setwallpaper2btn' onClick={setwallpaper2}
                        style={{ background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' }} />
                    <button className='switchwall' id='setwallpaper3btn' onClick={setwallpaper3}
                        style={{ background: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)' }} />
                    <button className='switchwall' id='setwallpaper4btn' onClick={setwallpaper4}
                        style={{ background: 'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)' }} />
                </div>
            </div>
        </nav >
    )
}

export default Bottombar