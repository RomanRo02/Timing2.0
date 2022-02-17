function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
}

let currentTiming


const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', stopBooking)

const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', pauseBooking)

const startButton = document.getElementById('startButton');
startButton.addEventListener("click", startBooking);

function createNewTiming() {
    return {
        id: '12345',
        userId: 'UserId1234',
        applicationId: 'ApplicationId12345',
        createdAt: new Date(),
        updateAt: new Date(),
        type: 'tracking',
        bookings: [
            {
                timeStamp: new Date(),
                type: 'start',
            }
        ],
    }
}

function startTime () {
    const last = currentTiming.bookings.length - 1;
    const timeType = currentTiming.bookings[last].type;
// gucken ob der currentTiming.bookings[last].type 'start' aktiviert wurde
    document.getElementById('startButton');
    if (timeType === 'start') {
// holen wir uns die zeit
        const timeStamp = currentTiming.bookings[0].timeStamp;
        let timeDuration = Date.now() - timeStamp;
        let time = document.getElementById('timeBox');

        let ms = timeDuration,
            min = Math.floor((ms/1000/60) << 0),
            sec = Math.floor((ms/1000) % 60);
        time.textContent = min + ':' + sec;
        console.log(min + ':' + sec);

// wir aktualisisieren die zeit jede sekunde
    }
}

setInterval(startTime, 1000);
function createBooking(type) {
    if(type === 'start' || type === 'pause' || type === 'stop') {
        return {
            timeStamp: new Date(),
            type: type,
        }
    }
    return undefined;
}


function startBooking() {
    if (!currentTiming) {
        currentTiming = createNewTiming();
        let start = Date.now();
        //alert('die zeit wurde gestartet');
    } else {
        const last = currentTiming.bookings.length - 1;
        if (['start', 'stop'].includes(currentTiming.bookings[last].type)) return;
        const booking = createBooking('start');
        currentTiming.bookings.push(booking);
    }
    startTime();
}

function stopBooking() {
    if (currentTiming) {
        const last = currentTiming.bookings.length - 1;
        if (currentTiming.bookings[last].type === 'stop') return;


        if (confirm('willst du sicher aufhören?')) {
            const booking = createBooking('stop');
            currentTiming.bookings.push(booking);
            setTimeout(() => {
                const millls = Date.now - start
            } )
        } else {
            alert('die zeit läuft weiter');
        }

    }
}


function pauseBooking() {
    if (currentTiming) {
        const last = currentTiming.bookings.length - 1;
        if (['pause', 'stop'].includes(currentTiming.bookings[last].type)) return;
        alert('die zeit wurde pausiert');
        const booking = createBooking('pause');
        currentTiming.bookings.push(booking);
    }
}

/*const array = [
    {
        timestamp: new Date('2022-01-02T09:17:00'),
        type: 'pause',
    },
    {
        timestamp: new Date('2022-01-02T08:12:00'),
        type: 'start',
    },
    {
        timestamp: new Date('2022-01-02T09:00:00'),
        type: 'start',
    },
    {
        timestamp: new Date('2022-01-02T08:43:00'),
        type: 'pause',
    }
]*/

//array.sort((a,b) => a.timestamp > b.timestamp ? 1 : a.timestamp < b.timestamp ? -1 : 0);


// const date1 =  new Date(array[0].timestamp);
// const date2 =  new Date(array[1].timestamp);

/*
if (date1 < date2) {
    date2.setDate(date2.getDate() + 1);
}
*/


/*const diff = date2 - date1;
console.log(date1)
console.log(date2)
console.log(diff)*/

/*let time = new Date(diff)
console.log(time.getUTCHours() + ':' + time.getUTCMinutes())*/

/*const start = Date.now()*/


/*setInterval(() => {
    const millis = Date.now() - start;*/


/*    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
}, date2.getTime())*/

function changeSekund() {
    if(!currentTiming) {
        currentTiming = setInterval(flashText, 1000);
    }
}

function flashText() {
    const oElem = document.getElementById('startButton');
    if (oElem.className === "start") {
        oElem.className = "stop";
    } else {
        oElem.className = "start";
    }
}

function stopTextColor() {
    clearInterval(currentTiming);
    currentTiming = null;
}
document.getElementById("startButton").addEventListener("click", changeSekund);
document.getElementById("stopButton").addEventListener("click", stopTextColor);
