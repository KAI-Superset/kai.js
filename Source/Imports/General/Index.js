const Schedule = require('../Classes/Schedule');
const groupParse = require('../../Utilities/Parsers/Schedule/Group');
const subjectParse = require('../../Utilities/Parsers/Schedule/Subject');
const request = require('../../Utilities/Functions/Request');

module.exports = {
    Schedule: Schedule,
    // AboutMe: AboutMe,
    parser: {
        subject: subjectParse,
        group: groupParse
    },
    request: request
}