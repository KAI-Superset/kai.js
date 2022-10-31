const assert = require('assert');
const { Schedule, request, parser } = require('../../../imports/general');
const schedule = new Schedule();

describe('Schedule', () => {

    it('https://kai.ru/main responds', async () => {
        const response = await request({
            method: 'GET',
            url: 'https://kai.ru/main',
            contentType: 'application/json'
        });

        assert.strictEqual(response.status, 200, 'No respond got');
    }).timeout(10000);

    describe('Raw', () => {

        describe('getGroups', () => {

            it('Empty array when no group found', async () => {
                const getGroups41311 = await schedule.raw.getGroups(41311);

                assert.deepEqual(getGroups41311, [], 'Group has been found');
            });

            it('Returning array results for 4131 query', async () => {
                const getGroups4131 = await schedule.raw.getGroups(4131);
                const getGroupsTemp = [
                    {
                        id: 23653,
                        group: '4131',
                        forma: '4toto'
                    }
                ];

                assert.deepEqual(getGroups4131, getGroupsTemp, 'Groups do not match');
            });

        });

        describe('getSchedule', () => {

            it('Error when no groups found/several groups found', async () => {
                const getSchedule41311 = await schedule.raw.getSchedule(41311);

                assert.strictEqual(
                    getSchedule41311.error?.english,
                    'Found more/less than 1 group IDs for the search query!',
                    'Group has been found'
                );
            });

            it('Does not return empty object for 4131 query', async () => {
                const getSchedule4131 = await schedule.raw.getSchedule(4131);

                assert.notDeepEqual(getSchedule4131, {}, "schedule is empty");
            });

        });
    });
    describe('Formatted', () => {
        
        describe('getGroups', () => {

            it('Empty array when no group found', async () => {
                const getGroups41311 = await schedule.getGroups(41311);

                assert.deepEqual(getGroups41311, [], 'Group has been found');
            });

            it('Returning array results for 4131 query', async () => {
                const getGroups4131 = await schedule.getGroups(4131);
                const getGroupsTemp = [
                    {
                        group: {
                            id: 23653,
                            name: "4131",
                            learningProgramme: {
                                name: "full-time",
                                raw: "4toto"
                            }
                        }
                    }
                ];

                assert.deepEqual(getGroups4131, getGroupsTemp, 'Groups do not match');
            });

            describe('groupParse', () => {
    
                it('Does not return empty group object for 4131 query', async () => {
                    const getGroups4131 = await schedule.raw.getGroups(4131);
    
                    assert.notDeepEqual(parser.group(getGroups4131[0]), {}, "Group is empty");
                });

                it('Successfully returning object results for 4131 query', async () => {
                    const getGroups4131 = await schedule.raw.getGroups(4131);
                    const getGroupsTemp = {
                        group: {
                            id: 23653,
                            name: "4131",
                            learningProgramme: {
                                name: "full-time",
                                raw: "4toto"
                            }
                        }
                    };
    
                    assert.deepEqual(parser.group(getGroups4131[0]), getGroupsTemp, "Groups do not match");
                });
    
            });

        });

        describe('getSchedule', () => {

            it('Error when no groups found/several groups found', async () => {
                const getSchedule41311 = await schedule.getSchedule(41311);

                assert.strictEqual(
                    getSchedule41311.error?.english,
                    'Found more/less than 1 group IDs for the search query!',
                    'Group has been found'
                );
            });

            it('Does not return empty object for 4131 query', async () => {
                const getSchedule4131 = await schedule.getSchedule(4131);

                assert.notDeepEqual(getSchedule4131, {}, "schedule is empty");
            });

            describe('scheduleParse', () => {
    
                it('Does not return empty subject object for 4131 query', async () => {
                    const getSchedule4131 = await schedule.raw.getSchedule(4131);
    
                    assert.notDeepEqual(parser.subject(getSchedule4131["1"][0]), {}, "Subject is empty");
                });
    
            });

        });
    });
});