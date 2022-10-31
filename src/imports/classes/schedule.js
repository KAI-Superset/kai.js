const getGroups = require('../../methods/schedule/formatted/getGroups');
const getSchedule = require('../../methods/schedule/formatted/getSchedule');
const getRawGroups = require('../../methods/schedule/raw/getGroups');
const getRawSchedule = require('../../methods/schedule/raw/getSchedule');

module.exports = class Schedule {
    constructor() {}

    raw = {
        getGroups: getRawGroups,
        getSchedule: getRawSchedule
    }

    getSchedule = getSchedule;
    getGroups = getGroups;
}