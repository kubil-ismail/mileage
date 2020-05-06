const { runCalculate} = require('./src/functions');

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

runCalculate(start, end);
