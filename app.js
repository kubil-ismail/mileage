const {calculateMiliSec} = require('./src/functions');

const onFiveMinute = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 300000)
})

const onTenMinute = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 600000)
})

async function calculateMils(start, end) {
    // Milisecond
    let startMs = calculateMiliSec(start);
    let endMs = calculateMiliSec(end);

    // Start speed
    let acceleration = 0;
    let speed = 6;

    try {
        // Run on 5 Minute
        acceleration = await onFiveMinute
        startMs += 300000;

        // Loop on 10 minute
        for (startMs; startMs < endMs; startMs += 600000) {
            acceleration += await onTenMinute
        }
    } catch (e) {
        acceleration = 0
    }
    return (speed + acceleration) * 3.6;
}

let start = {
    hrs: 10,
    min: 12,
    sec: 21
}

let end = {
    hrs: 12,
    min: 00,
    sec: 00
}

calculateMils(start, end).then(result => console.log(`Jarak Tempuh ${result} km`));
