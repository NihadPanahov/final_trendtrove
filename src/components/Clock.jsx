import React, { useState, useEffect } from 'react';
import discount from '../img/discount gif.gif';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Clock = () => {
  const [t, i18n] = useTranslation('global');
  const theme = useSelector((state) => state.theme.mode);

  const [countdownText, setCountdownText] = useState('');

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date('June 06, 2023').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      if (difference < 0) {
        clearInterval(interval);
        setCountdownText('Discount time has ended');
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setCountdownText(
          `Discount time is ending in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        );
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerClass = `flex flex-col lg:text-xl text-sm md:flex-row justify-center items-center h-full py-10 md:py-24 my-10 md:my-24 rounded-2xl ${
    theme === 'light' ? 'bg-gray-100' : 'bg-gray-600 text-white'
  }`;
  const textClass = theme === 'light' ? 'text-gray-500' : 'text-gray-400';

  return (
    <>
      <div className={containerClass}>
        <div className="flex flex-col md:flex-row justify-center items-center md:pl-20 sm:pl-0">
          <div className="text-center md:mr-8">
            <h1 className="lg:text-6xl text-5xl  font-bold mb-4">{days}</h1>
            <p className={textClass}>{t('days')}</p>
          </div>
          <span className="lg:text-6xl text-2xl font-bold mx-4">:</span>
          <div className="text-center md:mr-8">
            <h1 className="lg:text-6xl text-5xl font-bold mb-4">{hours}</h1>
            <p className={textClass}>{t('hours')}</p>
          </div>
          <span className="lg:text-6xl text-2xl font-bold mx-4">:</span>
          <div className="text-center md:mr-8">
            <h1 className="lg:text-6xl text-5xl font-bold mb-4">{minutes}</h1>
            <p className={textClass}>{t('minutes')}</p>
          </div>
          <span className="lg:text-6xl text-2xl font-bold mx-4">:</span>
          <div className="text-center">
            <h1 className="lg:text-6xl text-5xl  font-bold mb-4">{seconds}</h1>
            <p className={textClass}>{t('seconds')}</p>
          </div>
        </div>
        <img
          className="w-1/2 md:w-1/6 my-10 mx-20 md:my-0 ml-[200px] max-md:ml-16"
          src={discount}
          alt=""
        />
      </div>
      <p className="mb-10 md:mb-24 text-center">
        <i>{countdownText}</i>
      </p>
    </>
  );
};

export default Clock;
