const runCalculate = require('./src/functions')

let start = {
    hrs: '10',
    min: '12',
    sec: '21'
}

let end = {
    hrs: '12',
    min: '00',
    sec: '00'
}

const run = runCalculate(start, end)
console.log(`Perjalanan selama pukul ${run.start} - ${run.end} jarak yang di tempuh : ${run.distance}`)
