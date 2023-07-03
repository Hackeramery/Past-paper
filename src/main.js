const script1 = () => {
let clockHour = document.getElementById("hour");
let clockMinute = document.getElementById("minute");
let clockSecond = document.getElementById("second");
let clockStatus = document.getElementById("status");

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if ( hour < 10 & minute < 10 & second < 10) {
        clockHour.innerText = `0${hour}`;
        clockMinute.innerText = `0${minute}`;
        clockSecond.innerText = `0${second}`;
    }

    else if ( hour < 10 & minute < 10 ) {
        clockHour.innerText = `0${hour}`;
        clockMinute.innerText = `0${minute}`;
        clockSecond.innerText = second;
    }

    else if ( hour < 10 & second < 10 ) {
        clockHour.innerText = `0${hour}`;
        clockMinute.innerText = minute;
        clockSecond.innerText = `0${second}`;
    }

    else if ( minute < 10 & second < 10 ) {
        clockHour.innerText = hour;
        clockMinute.innerText = `0${minute}`;
        clockSecond.innerText = `0${second}`;
    }

    else if ( hour < 10 ) {
        clockHour.innerText = `0${hour}`;
        clockMinute.innerText = minute;
        clockSecond.innerText = second;
    }

    else if ( minute < 10 ) {
        clockHour.innerText = hour;
        clockMinute.innerText = `0${minute}`;
        clockSecond.innerText = second;
    }

    else if ( second < 10 ) {
        clockHour.innerText = hour;
        clockMinute.innerText = minute;
        clockSecond.innerText = `0${second}`;
    }

    else {
        clockHour.innerText = hour;
        clockMinute.innerText = minute;
        clockSecond.innerText = second;
    }
    
    if( hour >= 0 & hour <= 12 ) {
        clockStatus.textContent = "AM";
    }
    else {
        clockStatus.textContent = "PM";
    }
}

window.onload = clock;

setInterval(clock, 1000);

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let time = document.getElementById("time");

if ( hour >= 0 & hour <= 12 ) {
    time.textContent = "Good Morning";
}

else if ( hour >= 13 & hour <= 16 ) {
    time.textContent = "Good Afternoon";
}

else if ( hour >= 17 & hour <= 23 ) {
    time.textContent = "Good Evening";
}

let manageNuisances = document.getElementById('manage-nuisances');
let manageUsers = document.getElementById('manage-users');
let Users = document.getElementById('users');
let welcome = document.getElementById('welcome');
let Nuisances = document.getElementById('nuisances');
let content = document.querySelectorAll('.content');
let navButtons = document.querySelectorAll('.navbuttons');

manageNuisances.onclick = function() {
    welcome.style.display = "none";
    for ( let i = 0; i < content.length; i++ ) {
        content[i].style.display = 'none';
    }
    Nuisances.style.display = "block";

    for ( let y = 0; y < navButtons.length; y++ ) {
        if ( navButtons[y].classList.contains("active") ) {
            navButtons[y].classList.remove("active");
        }
    }

    if ( !manageNuisances.classList.contains("active") ) {
        manageNuisances.classList.add("active");
    } 
} 

manageUsers.onclick = function() {
    welcome.style.display = "none";
    for ( let i = 0; i < content.length; i++ ) {
        content[i].style.display = 'none';
    }

    for ( let y = 0; y < navButtons.length; y++ ) {
        if ( navButtons[y].classList.contains("active") ) {
            navButtons[y].classList.remove("active");
        }
    }

    Users.style.display = "block";
    if ( !manageUsers.classList.contains("active") ) {
        manageUsers.classList.add("active");
    } 
} 


let addUser = document.getElementById("add-user");
let addClose = document.getElementById("add-close");
let addOpen = document.getElementById("add-open");

addClose.onclick = function() {
    addUser.style.display = "none";
}

addOpen.onclick = function() {
    addUser.style.display = "flex";
}

};


export default {
    script1,
};