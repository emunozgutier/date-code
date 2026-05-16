import { 
  format, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  startOfMonth, 
  endOfMonth, 
  isSameMonth, 
  isToday 
} from 'date-fns';

interface CalendarProps {
  monthDate: Date;
}

export function Calendar({ monthDate }: CalendarProps) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  
  // We want the grid to always start on Sunday of the first week of the month
  // and end on Saturday of the last week of the month.
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>{format(monthStart, 'MMMM yyyy')}</h3>
      </div>
      <div className="calendar-grid">
        {weekDays.map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {days.map(day => {
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isCurrentDay = isToday(day);
          
          return (
            <div 
              key={day.toISOString()} 
              className={`calendar-day ${!isCurrentMonth ? 'disabled-day' : ''} ${isCurrentDay ? 'today-day' : ''}`}
            >
              <span className="day-number">{format(day, 'd')}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
