import React from 'react';
import { useCountDown } from './useCountDown';
import DateTimeDisplay from './DateTimeDisplay';


const ExpiredNotice = () => {
  return (
<div className='expired-notice'>
  <span>You've cum!!</span>
</div>
); };


const ShowCounter = ({weeks, days, hours, minutes, seconds}) => {
  return (
      <div className='show-counter'>
        <a
        className="countdown-link"
      >
        <DateTimeDisplay value={weeks} type={'Weeks'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 1} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>


      </div>


  );
};

const CountDownTimer = ({targetDate}) => {
  const [weeks, days, hours, minutes, seconds] = useCountDown(targetDate);

  if (weeks + days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice/> }
  else {
    return (
      <ShowCounter 
      weeks={weeks}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>
    );
  }

};

export default CountDownTimer;