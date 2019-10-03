import {calculateRemainingAbsentDays, transformInputDateListToMomentDate} from './ilrCalculator';

const DATE_FORMAT = 'DD-MM-YYYY';

test("Absent for 8 days, should return remaining 172 days.", ()=> {
    let absentList = [
        {   //8 days
            "start": '01-09-2019',
            "end": '10-09-2019'
        }
    ];
    const transformedAbsentList = transformInputDateListToMomentDate(absentList, DATE_FORMAT);
    expect(calculateRemainingAbsentDays(transformedAbsentList)).toBe(172);
});

test("Multiple absences, should accumulate all absences days ", ()=> {
    let absentList = [
        {   //1 day
            "start": '01-07-2019',
            "end": '03-07-2019'
        },
        {   //8 days
            "start": '01-09-2019',
            "end": '10-09-2019'
        }
    ];
    const transformedAbsentList = transformInputDateListToMomentDate(absentList, DATE_FORMAT);
    expect(calculateRemainingAbsentDays(transformedAbsentList)).toBe(171)
});

test("Absence includes dates outside 365 days period, should ignore absences that are older than 365 days.", ()=> {
    let absentList = [
        {   //Absence outside the period
            "start": '01-07-2017',
            "end": '10-07-2017'
        },
        {   //Absence outside the period
            "start": '01-06-2018',
            "end": '03-06-2018'
        },
        {   //8 days
            "start": '01-09-2019',
            "end": '10-09-2019'
        }
    ];
    const transformedAbsentList = transformInputDateListToMomentDate(absentList, DATE_FORMAT);
    expect(calculateRemainingAbsentDays(transformedAbsentList)).toBe(172)
});

test("Only a part of the absence fall inside the 365 days period, should consider only absent days within the period", ()=> {
    let absentList = [
        {   //1 day
            "start": '20-09-2018',
            "end": '04-10-2018'
        },
        {   //8 days
            "start": '01-09-2019',
            "end": '10-09-2019'
        }
    ];
    const transformedAbsentList = transformInputDateListToMomentDate(absentList, DATE_FORMAT);
    expect(calculateRemainingAbsentDays(transformedAbsentList)).toBe(171)
});

test("Absent more that 180 days, should return 0 remaining day", ()=> {
    let absentList = [
        {
            "start": '01-01-2019',
            "end": '10-09-2019'
        }
    ];
    const transformedAbsentList = transformInputDateListToMomentDate(absentList, DATE_FORMAT);
    expect(calculateRemainingAbsentDays(transformedAbsentList)).toBe(0)
});
