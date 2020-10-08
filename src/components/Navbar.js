import React from 'react'
import './Public.css';

function calldark() {
}

function calllight() {
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

    if (!localStorage.getItem('wallpaper')) {
        document.documentElement.setAttribute('data-wallpaper', 'wallpaper1');
        localStorage.setItem('wallpaper', 'wallpaper1');
        localStorage.setItem('wallpaper-mode', 'wallpaper1');
        document.getElementById("setwallpaper1btn").disabled = true;
    }
    else {
        if (localStorage.getItem('wallpaper-mode') == "wallpaper1") {
            document.getElementById("setwallpaper1btn").disabled = true;
        }
        else if (localStorage.getItem('wallpaper-mode') == "wallpaper2") {
            document.getElementById("setwallpaper2btn").disabled = true;
        }
        else if (localStorage.getItem('wallpaper-mode') == "wallpaper3") {
            document.getElementById("setwallpaper3btn").disabled = true;
        }
        else if (localStorage.getItem('wallpaper-mode') == "wallpaper4") {
            document.getElementById("setwallpaper4btn").disabled = true;
        }
    }

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
        <nav className='container' style={{ paddingTop: '30px' }}>
            <div className='row mynav' style={{}}>
                <div className='nav-block' style={{ width: '180px' }}>
                    <button className='switch' id='setlightbtn' onClick={setlight}>Light</button>
                    <button className='switch' id='setdarkbtn' onClick={setdark}>Dark</button>
                    <button className='switch' id='setdefaultbtn' onClick={setdefault}>Auto</button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar