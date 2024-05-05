import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    if (remainingDays <= 5) {
      timeLeft = {
        days: remainingDays,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else if (remainingDays <= 2) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: remainingDays,
      };
    }
  }

  return timeLeft;
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  // Destructure the timeLeft object
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown">
      <h1 className='xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white'>
        {days && `${days} Days`} {hours && `${hours} Hours`} {minutes && `${minutes} Minutes`} {seconds && `${seconds} Seconds`}
      </h1>
    </div>
  );
};

export default Countdown;
