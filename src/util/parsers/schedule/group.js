module.exports = function groupParse(group) {
    let groupsResponse = {};
    groupsResponse.group = {};

    Object.keys(group).forEach((key) => {
        switch(key) {
            case 'id':
                groupsResponse.group.id = group[key];
                break;
            case 'group':
                groupsResponse.group.name = group[key];
                break;
            case 'forma':
                groupsResponse.group.learningProgramme = {};

                switch (group[key]) {
                    case '4toto':
                        groupsResponse.group.learningProgramme.name = 'full-time';
                        break;
                    case 'zaochnik':
                        groupsResponse.group.learningProgramme.name = 'correspondence';
                        break;
                }
                groupsResponse.group.learningProgramme.raw = group[key];
                break;
        }
    });
    return groupsResponse;
}