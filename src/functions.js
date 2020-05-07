// Get Milisecond
function getMs(time) {
    return new Date(`2020-01-01T${time.hrs}:${time.min}:${time.sec}`).getTime();
}

// Get Time
function getTime(time) {
    return `${time.hrs}:${time.min}:${time.sec}`
}

const runCalculate = (start, end) => {
    // Get Milisecond
    let startMs = getMs(start) // Start Milisecond
    let endMs = getMs(end) // End Milisecond
    let diffMs = (endMs - startMs) / 1000 // Different Milisecond

    // Default variabel
    let speed = 6
    let minute = 0
    let milage = 0

    // Loop until diffMs 0 seconds
    for (let seconds = 0; seconds <= diffMs; seconds++) {
        // Convert to minute
        minute = seconds / 60

        // If 5 minute + 2
        if (minute === 5) speed += 2

        // On 10 minute + 1
        if ((minute - 5) % 10 === 0 && minute !== 5) speed++

        milage += speed
    }

    // Return data
    let data = {
        start: getTime(start),
        end: getTime(end),
        distance: milage / 1000
    }

    return data
}

module.exports = runCalculate