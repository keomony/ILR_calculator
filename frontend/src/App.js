import React, { useState } from 'react';
import './App.css';
import { CalendarRow } from './components/calendarRow';
import { start, end } from './lib/datesStore';

const App = () => {

  const [remainingDays, setRemainingDays] = useState();
  
  return (
    <div>
      <h3 align="center"> Tier 2 visa holder: Indefinite Leave to Remain </h3>
      <CalendarRow updateStartDate={start} updateEndDate={end} id={0} setRemainingDays={setRemainingDays} />
      <CalendarRow updateStartDate={start} updateEndDate={end} id={1} setRemainingDays={setRemainingDays} />
      <div>The remaining days: {remainingDays}</div>
    </div>
  );
}

export default App;
