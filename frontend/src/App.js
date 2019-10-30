import React, { useState } from 'react';
import './App.css';
import { CalendarRow } from './components/calendarRow';
import { start, end } from './lib/datesStore';

const App = () => {

    const [remainingDays, setRemainingDays] = useState();
    const [calendars, setCalender] = useState([]);


    const handleAddCalendar = () => {
        calendars.push("");
        setCalender([...calendars]);
    }

    const removeCalendar = (calendarIndex) => {
        calendars.splice(calendarIndex, 1);
        setCalender([...calendars]);
    }

    return (
        <div>
          <h3 align="center"> Tier 2 visa holder: Indefinite Leave to Remain </h3>

          {calendars.map((c, index) => {
              return (<div key={index}>
                        <CalendarRow updateStartDate={start} updateEndDate={end} id={index} setRemainingDays={setRemainingDays} />
                        <button onClick={()=>{removeCalendar(index)}}>remove</button>
                      </div>)
          })}

          <div>The remaining days: {remainingDays}</div>
          <div><button onClick={handleAddCalendar}>add calendar</button>{calendars}</div>
        </div>
    );
}

export default App;
