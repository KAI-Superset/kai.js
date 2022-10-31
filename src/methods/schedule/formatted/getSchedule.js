const subjectParse = require('../../../util/parsers/schedule/subject');

module.exports = async function getSchedule(groupNumber) {
    const request = await require('../raw/getSchedule')(groupNumber);

    if (request.error) return request;

    const response = [];

    const requestArray = Object.keys(request);
    requestArray.forEach((day) => {

        let index = requestArray.indexOf(day);
        request[day].forEach((subject) => {

            const subjectResponse = subjectParse(subject)
            if (Array.isArray(response[index])) response[index][request[day].indexOf(subject)] = subjectResponse;
            else response[index] = [ subjectResponse ];
        });
    });

    return response;
}