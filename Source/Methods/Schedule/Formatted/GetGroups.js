const groupParse = require('../../../Utilities/Parsers/Schedule/Group');

module.exports = async function getGroups(groupNumber) {
    const request = await require('../Raw/GetGroups')(groupNumber);

    if (request.error) return request;

    const requestArray = Object.keys(request);
    const response = [];
    requestArray.forEach((group) => {
        const groupResponse = groupParse(request[group])
        response.push(groupResponse);
    });

    return response;
}