const groupParse = require('../../../util/parsers/schedule/group');

module.exports = async function getGroups(groupNumber) {
    const request = await require('../raw/getGroups')(groupNumber);

    if (request?.error) return request;

    const requestArray = Object.keys(request);
    const response = [];
    requestArray.forEach((group) => {
        const groupResponse = groupParse(request[group])
        response.push(groupResponse);
    });

    return response;
}