const subjectParse = require('../../../Utilities/Parsers/Schedule/Subject');

module.exports = async function getSchedule(groupNumber) {
    const request = await require('../Raw/GetSchedule')(groupNumber);

    if (request.error) {
        return request;
    }

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