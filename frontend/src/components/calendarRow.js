import React, {useState} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import styled from '@emotion/styled';
import * as moment from 'moment';

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
  const initStartDate = moment([2019, 2, 11]);
  const initEndDate = moment([2019, 3, 11]);
  const [state, setState] = useState({ initStartDate, initEndDate });

  return (
    <Container>
      <DateRangePicker
        startDate={null} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={null} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          console.log(startDate);
          setState({ startDate, endDate })
        }} // PropTypes.func.isRequired,
        focusedInput={'startDate'} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => () => {}} // PropTypes.func.isRequired,
      />
      <Button>delete</Button>
    </Container>
  );
}
