const onFiveMinute = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 30)
})

const onTenMinute = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 60)
})

// Convert to Milisecond
function calculateMiliSec(time) {
    return ((time.hrs * 60 * 60 + time.min * 60 + time.sec) * 1000);
}

async function calculateMils(start, end) {
    // Milisecond
    let startMs = calculateMiliSec(start);
    let endMs = calculateMiliSec(end);

    // Start speed
    let acceleration = 3;
    let speed = 6;

    try {
        // Run on 5 Minute
        acceleration += await onFiveMinute
        startMs += 300000;

        // Loop on 10 minute
        for (startMs; startMs <= endMs; startMs += 600000) {
            acceleration += await onTenMinute
        }
    } catch (e) {
        acceleration = 3
    }

    return (speed + acceleration) * 3.6;
}

module.exports = {
    runCalculate: function (start, end) {
        calculateMils(start, end).then(result => console.log(`Jarak Tempuh ${result} km`));
    }
};