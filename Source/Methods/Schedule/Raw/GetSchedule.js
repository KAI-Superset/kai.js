const request = require('../../../Utilities/Functions/Request');

module.exports = async function getSchedule(groupNumber) {
    const groupId = await require('../Formatted/GetGroups')(groupNumber);
    if (groupId.length !== 1) {
        return {
            error: {
                english: 'Found more/less than 1 group IDs for the search query!',
                russian: 'Было найдено больше/меньше 1 Айди группы из поиска!',
            },
            ids: groupId
        }
    }

    const response = await request({
        method: 'POST',
        url: 'https://kai.ru/raspisanie',
        params: {
            p_p_id: 'pubStudentSchedule_WAR_publicStudentSchedule10',
            p_p_lifecycle: 2,
            p_p_resource_id: 'schedule'
        },
        data: `groupId=${groupId[0].group.id}`,
        contentType: 'application/x-www-form-urlencoded'
    });

    return response.data;
}