import React, { useEffect, useMemo, useState } from "react";
import Countdown from "./Countdown";

const LaunchCountdown = ({ date }) => {
  const [days, setDays] = useState('--');
  const [hours, setHours] = useState('--');
  const [minutes, setMinutes] = useState('--');
  const [seconds, setSeconds] = useState('--')

  useEffect(() => {
    const target = new Date(date);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className='flex flex-row gap-4'>
      <Countdown prev={0} count={days} label={'días'} />
      <Countdown prev={0} count={hours} label={'hours'} />
      <Countdown prev={0} count={minutes} label={'minutes'} />
      <Countdown prev={0} count={seconds} label={'seconds'} />
    </div>
  );
};

export default LaunchCountdown;
