module.exports = {
    calculateMiliSec: function (time) {
        return ((time.hrs * 60 * 60 + time.min * 60 + time.sec) * 1000);
    }
};