import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';

var e = window.matchMedia("(prefers-color-scheme: dark)");
function setdefault() {
    localStorage.setItem('theme-mode', 'default');
    document.getElementById("setdefaultbtn").disabled = true;
    document.getElementById("setdarkbtn").disabled = false;
    document.getElementById("setlightbtn").disabled = false;
    e.addListener(chkdefault);
    chkdefault(e);
}

function chkdefault(x) {
    if (document.documentElement.getAttribute('data-theme') != 'dark' && x.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else if (document.documentElement.getAttribute('data-theme') != 'light' && !x.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

function setdark() {
    localStorage.setItem('theme-mode', 'dark');
    document.getElementById("setdefaultbtn").disabled = false;
    document.getElementById("setdarkbtn").disabled = true;
    document.getElementById("setlightbtn").disabled = false;
    e.removeListener(chkdefault);
    if (document.documentElement.getAttribute('data-theme') != 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function setlight() {
    localStorage.setItem('theme-mode', 'light');
    document.getElementById("setdefaultbtn").disabled = false;
    document.getElementById("setdarkbtn").disabled = false;
    document.getElementById("setlightbtn").disabled = true;
    e.removeListener(chkdefault);
    if (document.documentElement.getAttribute('data-theme') != 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

window.onload = function () {
    if (!localStorage.getItem('theme')) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        setdefault();
    }
    else {
        if (localStorage.getItem('theme-mode') == "default") {
            document.getElementById("setdefaultbtn").disabled = true;
        }
        else if (localStorage.getItem('theme-mode') == "dark") {
            document.getElementById("setdarkbtn").disabled = true;
        }
        else if (localStorage.getItem('theme-mode') == "light") {
            document.getElementById("setlightbtn").disabled = true;
        }
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

if (localStorage.getItem('theme-mode') == "default") {
    chkdefault(e);
    e.addListener(chkdefault);
}

function Titlebar() {
    return (
        <div className='row title-box'>
            <div className='col-md-6 title'>
                WELCOME
            </div>
            <div className='col-md-6 item-text' style={{ margin: 'auto' }}>
                <button className='switch' id='setlightbtn' onClick={setlight}>Light</button>
                <button className='switch' id='setdarkbtn' onClick={setdark}>Dark</button>
                <button className='switch' id='setdefaultbtn' onClick={setdefault}>Auto</button>
            </div>
        </div>
    )
}

export default Titlebar