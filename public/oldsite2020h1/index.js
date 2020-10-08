function calldark() {
    document.getElementById('logo').src = 'img/logo-white.png'
    document.getElementById('icon-phone').src = 'img/icon-phone-white.png'
    document.getElementById('icon-email').src = 'img/icon-email-white.png'
    document.getElementById('icon-webinfo').src = 'img/icon-webinfo-white.png'
    document.getElementById('top-logo').src = 'img/top-logo-white.png'
}

function calllight() {
    document.getElementById('logo').src = 'img/logo-color.png'
    document.getElementById('icon-phone').src = 'img/icon-phone.png'
    document.getElementById('icon-email').src = 'img/icon-email.png'
    document.getElementById('icon-webinfo').src = 'img/icon-webinfo.png'
    document.getElementById('top-logo').src = 'img/top-logo.png'
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
