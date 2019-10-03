import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import styled from '@emotion/styled';
import * as moment from 'moment';
import {calculateRemainingAbsentDays} from '../bins/ilrCalculator';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '1rem'
});

const Button = styled.button({
  height: 'fit-content',
  alignSelf: 'center'
});

export const CalendarRow = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');

  return (
    <Container>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          if(startDate) setStartDate(startDate);
          if(endDate) setEndDate(endDate);
          // calculateRemainingAbsentDays([{
          //   start: startDate,
          //   end: endDate
          // }]);
        }} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      />
      <Button>delete</Button>
    </Container>
  );
}
