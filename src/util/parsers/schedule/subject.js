const toCapitalize = require('../../functions/capitalize');

module.exports = function subjectParse(subject) {
    let subjectResponse = {
        building: {},
        class: {},
        classroom: {},
        day: {},
        org: {},
        teacher: {}
    };

    Object.keys(subject).forEach((key) => {

        let clear = subject[key].trim();
        switch(key) {
            case 'audNum':
                subjectResponse.classroom.number = +clear ? +clear : clear;
                break;
            case 'buildNum':
                subjectResponse.building.number = +clear ? +clear : clear;
                break;
            case 'dayNum':
                subjectResponse.day.number = +clear;

                let weekDays = [
                    'Понедельник',
                    'Вторник',
                    'Среда',
                    'Четверг',
                    'Пятница',
                    'Суббота'
                ];
                subjectResponse.day.week = weekDays[+clear - 1];
                break;
            case 'dayTime':
                let timeSplit = clear.split(':');
                subjectResponse.day.time = {};
                subjectResponse.day.time.full = clear;
                subjectResponse.day.time.hours = +timeSplit[0];
                subjectResponse.day.time.minutes = +timeSplit[1];
                break;
            case 'dayDate':
                subjectResponse.day.evenOdd = {};
                subjectResponse.day.evenOdd.raw = clear;
                switch (clear) {
                    case 'чет':
                        subjectResponse.day.evenOdd.even = true;
                        subjectResponse.day.evenOdd.odd = false;
                        break;
                    case 'неч' || 'нет':
                        subjectResponse.day.evenOdd.even = false;
                        subjectResponse.day.evenOdd.odd = true;
                        break;
                    default:
                        subjectResponse.day.evenOdd.even = true;
                        subjectResponse.day.evenOdd.odd = true;
                        break;
                }
                break;
            case 'disciplName':
                subjectResponse.class.name = clear;
                break;
            case 'disciplNum':
                subjectResponse.class.number = +clear;
                break;
            case 'disciplType':
                subjectResponse.class.type = clear;
                break;
            case 'orgUnitId':
                subjectResponse.org.id = +clear;
                break;
            case 'orgUnitName':
                subjectResponse.org.name = clear;
                break;
            case 'potok':
                subjectResponse.group = clear;
                break;
            case 'prepodLogin':
                subjectResponse.teacher.login = clear;
                break;
            case 'prepodName':
                let teacherSplit = clear.split(' ');
                let teacherInfo = [];

                teacherSplit.forEach((name) => {
                    teacherInfo.push(toCapitalize(name));
                });

                subjectResponse.teacher.name = {};
                subjectResponse.teacher.name.info = teacherInfo;
                subjectResponse.teacher.name.first = teacherInfo[1];
                subjectResponse.teacher.name.middle = teacherInfo[2];
                subjectResponse.teacher.name.last = teacherInfo[0];
                subjectResponse.teacher.name.full = teacherInfo.join(' ');
                subjectResponse.teacher.name.raw = clear;
                break;
        }
    });
    return subjectResponse;
}