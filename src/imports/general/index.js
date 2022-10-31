const Schedule = require('../classes/schedule');
const groupParse = require('../../util/parsers/schedule/group');
const subjectParse = require('../../util/parsers/schedule/subject');
const request = require('../../util/functions/request');

module.exports = {
    Schedule: Schedule,
    // aboutMe: aboutMe,
    parser: {
        subject: subjectParse,
        group: groupParse
    },
    request: request
}