import { useState } from 'react';
import { getWeek, getDay, subMonths, addMonths } from 'date-fns';
import { Calendar } from './components/Calendar';
import './App.css';

function App() {
  const [currentDate] = useState(new Date());

  // Calculate the week of the year
  const weekNumber = getWeek(currentDate);

  // Calculate the day code
  const isDayCodeRoute = window.location.pathname.startsWith('/daycode');
  const dayIndex = getDay(currentDate); // 0 is Sunday, 1 is Monday, etc.
  const letters = ['g', 'a', 'b', 'c', 'd', 'e', 'f']; // index 0 is 'g' for Sunday
  const dayLetter = letters[dayIndex];
  const dayCode = `${weekNumber}${dayLetter}`;

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
          <div className="week-label">{isDayCodeRoute ? 'Day Code' : 'Current Week'}</div>
          <div className="week-number">{isDayCodeRoute ? dayCode : weekNumber}</div>
          <div className="week-subtitle">{isDayCodeRoute ? 'week + day' : 'of the year'}</div>
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
