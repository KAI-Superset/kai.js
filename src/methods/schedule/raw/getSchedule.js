const request = require('../../../util/functions/request');

module.exports = async function getSchedule(groupNumber) {
    const groups = await require('../formatted/getGroups')(groupNumber);

    if (groups?.error) return groups;

    let groupId;
    if (groups.length >= 1 && groups[0].group.name == groupNumber) {
        groupId = groups[0].group.id;
    } else {
        return {
            error: {
                english: 'Found more/less than 1 group IDs for the search query!',
                russian: 'Было найдено больше/меньше 1 Айди группы из поиска!',
            },
            ids: groups
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
        data: `groupId=${groupId}`,
        contentType: 'application/x-www-form-urlencoded'
    });

    if (response?.error) return response;
    
    return response.data;
}