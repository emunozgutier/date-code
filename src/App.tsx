import { useState } from 'react';
import { getWeek, subMonths, addMonths } from 'date-fns';
import { Calendar } from './components/Calendar';
import './App.css';

function App() {
  const [currentDate] = useState(new Date());

  // Calculate the week of the year
  const weekNumber = getWeek(currentDate);

  // Calculate adjacent months
  const prevMonth = subMonths(currentDate, 1);
  const nextMonth = addMonths(currentDate, 1);

  return (
    <div className="app-container">
      <header>
        <div className="logo">DateCode</div>
      </header>

      <main>
        <div className="week-hero">
          <div className="week-label">Current Week</div>
          <div className="week-number">{weekNumber}</div>
          <div className="week-subtitle">of the year</div>
        </div>

        <div className="calendars-wrapper">
          <Calendar monthDate={prevMonth} />
          <Calendar monthDate={currentDate} />
          <Calendar monthDate={nextMonth} />
        </div>
      </main>
    </div>
  );
}

export default App;
