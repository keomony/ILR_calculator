import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates';
import styled from '@emotion/styled';
import moment from 'moment';
import { calculateRemainingAbsentDays, transformInputDateListToMomentDate } from '../lib/ilrCalculator';
import { dates } from '../lib/datesStore';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '1rem'
});

export const CalendarRow = ({ updateStartDate, updateEndDate, id, setRemainingDays }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');
  const currentDate = moment();

  const onDatesChange = ({ startDate, endDate }) => {
    if (startDate) {
      setStartDate(startDate);
      updateStartDate(id, startDate);
    }
    if (endDate) {
      setEndDate(endDate);
      updateEndDate(id, endDate);

      const stringDates = Object.values(dates).map(date => {
        return {
          start: date.start.format('DD-MM-YYYY'),
          end: date.end.format('DD-MM-YYYY')
        }
      });
      const remainingDays = calculateRemainingAbsentDays(transformInputDateListToMomentDate(stringDates), currentDate);
      setRemainingDays(remainingDays);

    }

  };

  return (
    <Container>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        isOutsideRange={day => !isInclusivelyBeforeDay(day, currentDate)}
        displayFormat="DD-MM-YYYY"
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      />
    </Container>
  );
}
