const request = require('../../../util/functions/request');

module.exports = async function getGroups(groupNumber) {
    const response = await request({
        method: 'GET',
        url: 'https://kai.ru/raspisanie',
        params: {
            p_p_id: 'pubStudentSchedule_WAR_publicStudentSchedule10',
            p_p_lifecycle: 2,
            p_p_resource_id: 'getGroupsURL',
            query: groupNumber
        },
        contentType: 'application/json'
    });

    if (response?.error) return response;

    return response.data;
}