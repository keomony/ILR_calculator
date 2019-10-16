import React from 'react';
import './App.css';
import { CalendarRow } from './components/calendarRow';
import { start, end } from './lib/datesStore';

const App = () => {

  return (
    <div>
      <h3 align="center"> Tier 2 visa holder: Indefinite Leave to Remain </h3>
      <CalendarRow updateStartDate={start} updateEndDate={end} id={0} />
      <CalendarRow updateStartDate={start} updateEndDate={end} id={1} />
      <button style={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'aliceblue',
        border: 'solid 1px #e6e6ff',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>Submit</button>
    </div>
  );
}

export default App;
