import moment from 'moment';

const WINDOW_PERIOD_DAYS = 365;
const MAX_ABSENT_DAYS = 180;

export function calculateRemainingAbsentDays(absentList){
    console.log(absentList);
    const beginDate = calcBeginDateFromToday(WINDOW_PERIOD_DAYS);
    const datesWithinPeriodList = filterAbsentDatesMustFallWithinPeriod(beginDate, absentList);
    const totalAbsentDays = calcTotalAbsentDays(datesWithinPeriodList);
    const remainingDays = MAX_ABSENT_DAYS - totalAbsentDays;
    console.log(remainingDays);
    return remainingDays>0? remainingDays:0;
}

export function transformInputDateListToMomentDate(inputList, dateFormat = 'DD-MM-YYYY'){
    return inputList.map(interval => {
        let momentDate = {};
        momentDate.start = moment(interval.start, dateFormat);
        momentDate.end = moment(interval.end, dateFormat);
        return momentDate
    })
}

function calcBeginDateFromToday(daysBeforeToday) {
    const now = moment();
    return now.subtract(daysBeforeToday,'days').startOf('day')
}


function filterAbsentDatesMustFallWithinPeriod(beginDate, absentList){
    const filteredEndDateAfterBeginDateList =  absentList.filter(interval => interval.end.isSameOrAfter(beginDate));
    return filteredEndDateAfterBeginDateList.map(interval => {
        if (interval.start.isBefore(beginDate)) {
            interval.start = beginDate.subtract(1, 'days')
        }
        return interval;
    });
}

function calcTotalAbsentDays(absentList){
    return absentList.map(interval => moment.duration(interval.end.diff(interval.start)).asDays())
        .reduce((total,days) => total+days-1 , 0); //exclude end date
}
