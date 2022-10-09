const getGroups = require('../../Methods/Schedule/Formatted/GetGroups');
const getSchedule = require('../../Methods/Schedule/Formatted/GetSchedule');
const getRawGroups = require('../../Methods/Schedule/Raw/GetGroups');
const getRawSchedule = require('../../Methods/Schedule/Raw/GetSchedule');

module.exports = class Schedule {
    constructor() {}

    raw = {
        getGroups: getRawGroups,
        getSchedule: getRawSchedule
    }

    getSchedule = getSchedule;
    getGroups = getGroups;
}