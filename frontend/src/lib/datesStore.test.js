import { start, dates, end } from "./datesStore";
import moment from 'moment';

describe('datesHelper', () => {
    it('should update startDate', () => {
        const startDate = moment('2017-11-10');
        start(0, startDate);

        expect(dates[0].startDate).toEqual(startDate);
    });
    it('should update endDate', () => {
        const endDate = moment('2017-11-10')
        
        end(0, endDate);

        expect(dates[0].endDate).toEqual(endDate);
    });
    it('should update endDate on an existing date', () => {
        const fixture = {
            initial: moment('2017-11-10'),
            expected: moment('2017-11-29')
        };

        const startDate = moment('2017-11-10');
        start(0, fixture.initial);
        start(0, fixture.expected);

        expect(dates[0].startDate).toEqual(fixture.expected);
    })
})