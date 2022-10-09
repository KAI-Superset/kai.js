import { AxiosPromise } from "axios";

export class Schedule {
    constructor() {}

    raw = {
        getGroups,
        getSchedule
    }
    getGroups;
    getSchedule;
}

interface RawSchedule {
    getGroups: (groupNumber: Number) => Promise<Array<ScheduleSpace.Group.Raw>>,
    getSchedule: (groupNumber: Number) => Promise<ScheduleSpace.Raw>
}

export interface ScheduleInterface {
    raw: RawSchedule;
    getGroups: (groupNumber: Number) => Promise<Array<ScheduleSpace.Group.Formatted>>;
    getSchedule: (groupNumber: Number) => Promise<ScheduleSpace.Formatted>;
}

export interface KaiRequest {
    url: string,
    method: string,
    params?: object,
    data?: string,
    contentType: string
}

declare namespace ScheduleSpace {
    export type Raw = {
        "1": Array<Subject.Raw>,
        "2": Array<Subject.Raw>,
        "3": Array<Subject.Raw>,
        "4": Array<Subject.Raw>,
        "5": Array<Subject.Raw>,
        "6": Array<Subject.Raw>,
    };

    export type Formatted = [
        Array<Subject.Formatted>,
        Array<Subject.Formatted>,
        Array<Subject.Formatted>,
        Array<Subject.Formatted>,
        Array<Subject.Formatted>,
        Array<Subject.Formatted>,
    ];

    declare namespace Subject {
        export type Raw = {
            prepodNameEnc: String,
            dayDate: String,
            audNum: String,
            disciplName: String,
            buildNum: String,
            orgUnitName: String,
            dayTime: String,
            dayNum: String,
            potok: String,
            prepodName: String,
            disciplNum: String,
            orgUnitId: String,
            prepodLogin: String,
            disciplType: String,
            disciplNameEnc: String
        };

        export type Formatted = {
            building: {
                number: Number
            },
            class: {
                name: String,
                number: Number | String,
                type: String
            },
            classroom: {
                number: Number
            },
            day: {
                evenOdd: {
                    name: String,
                    even: Boolean,
                    odd: Boolean
                },
                time: {
                    full: String,
                    hours: Number,
                    minutes: Number
                },
                number: Number,
                week: String
            },
            org: {
                name: String,
                id: Number
            },
            teacher: {
                name: {
                    info: Array<String>,
                    first: String,
                    middle: String,
                    last: String,
                    full: String
                },
                login: String
            },
            group: String
        }
    }

    declare namespace Group {
        export type Raw = {
            id: Number,
            group: String,
            forma: String
        }

        export type Formatted = {
            group: {
                id: Number,
                name: String,
                learningProgramme: {
                    name: String,
                    raw: String
                }
            }
        }
    }
}

export const parser = {
    subject: (subject: ScheduleSpace.Subject.Raw) => ScheduleSpace.Subject.Formatted,
    group: (group: ScheduleSpace.Group.Raw) => ScheduleSpace.Group.Formatted
}

export function request({}: KaiRequest): AxiosPromise;