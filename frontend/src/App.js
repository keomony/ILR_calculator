import React from 'react';
import './App.css';
import { CalendarRow } from './components/calendarRow';

const App = () => {

  return (
    <div>
      <h3 align = "center"> Tier 2 visa holder: Indefinite Leave to Remain </h3>
      <CalendarRow />
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
