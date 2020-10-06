import React from 'react'
import './Public.css';

function calldark() {
    if (window.location.pathname === "/") {
        document.getElementById('icon-aboutme').src = 'icon-aboutme-dark.png'
        document.getElementById('icon-switch').src = 'icon-switch-dark.png'
        document.getElementById('icon-creation').src = 'icon-creation.png'
    }
}

function calllight() {
    if (window.location.pathname === "/") {
        document.getElementById('icon-aboutme').src = 'icon-aboutme.png'
        document.getElementById('icon-switch').src = 'icon-switch.png'
        document.getElementById('icon-creation').src = 'icon-creation.png'
    }
}

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
        calldark();
    }
    else if (document.documentElement.getAttribute('data-theme') != 'light' && !x.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        calllight();
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
        calldark();
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
        calllight();
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
    if (document.documentElement.getAttribute('data-theme') == "dark") {
        calldark();
    }
    else if (document.documentElement.getAttribute('data-theme') == "light") {
        calllight();
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

function Navbar() {
    return (
        <nav className='container mynav' style={{ }}>
            <div className='row nav-block' style={{ width: '20%' }}>
                <button className='switch' style={{margin: 'auto' }} id='setlightbtn' onClick={setlight}>Light</button>
                <button className='switch' style={{margin: 'auto' }} id='setdarkbtn' onClick={setdark}>Dark</button>
                <button className='switch' style={{margin: 'auto' }} id='setdefaultbtn' onClick={setdefault}>Auto</button>
            </div>
        </nav >
    )
}

export default Navbar