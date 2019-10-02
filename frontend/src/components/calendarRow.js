import React from 'react';
import 'react-dates/initialize';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';

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
  
  return (
    <Container>
      <Calendar />
      <Button>delete</Button>
    </Container>
  );
}
