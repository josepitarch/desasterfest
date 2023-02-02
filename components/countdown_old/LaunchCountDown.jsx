import React, { useEffect, useState } from "react";
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
    <section>
      <header>
        <p className='text-3xl my-2 font-bold'>Solo quedan...</p>
      </header>
      <main className='flex flex-row gap-4 justify-center'>
        <Countdown prev={0} count={days} label={'días'} />
        <Countdown prev={0} count={hours} label={'horas'} />
        <Countdown prev={0} count={minutes} label={'minutos'} />
        <Countdown prev={0} count={seconds} label={'segundos'} />
      </main>
    </section>
  );
};

export default LaunchCountdown;
