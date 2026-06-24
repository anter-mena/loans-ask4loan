'use client';

import { useState, useEffect, useCallback } from "react";
import { X, Zap, Clock } from "lucide-react";

const CountdownBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  // Don't initialize with data that might mismatch between server and client
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isFriday, setIsFriday] = useState(false);

  const calculateTimeUntilEndOfFriday = useCallback(() => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday

    // Check if today is Friday
    if (currentDay !== 5) {
      return { hours: 0, minutes: 0, seconds: 0, isFri: false };
    }

    // Create end of Friday (23:59:59)
    const endOfFriday = new Date(now);
    endOfFriday.setHours(23, 59, 59, 999);

    // Calculate time difference
    const timeDiff = endOfFriday.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, isFri: false };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds, isFri: true };
  }, []);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    const data = calculateTimeUntilEndOfFriday();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft({ hours: data.hours, minutes: data.minutes, seconds: data.seconds });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFriday(data.isFri);

    const timer = setInterval(() => {
      const newData = calculateTimeUntilEndOfFriday();
      setTimeLeft({ hours: newData.hours, minutes: newData.minutes, seconds: newData.seconds });

      // Hide banner when countdown reaches zero or day ends
      if (!newData.isFri || (newData.hours === 0 && newData.minutes === 0 && newData.seconds === 0)) {
        setIsFriday(false);
      } else {
        setIsFriday(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeUntilEndOfFriday]);

  // Don't render if it's not Friday or user manually closed it
  if (!isFriday || !isVisible) return null;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      className="py-2 sm:py-2.5 px-3 sm:px-4 relative z-[60]"
      style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}
    >
      {/* Centered content */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Apply now section */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-medium">Apply now for Friday deposit!</span>
        </div>

        {/* Time left section */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Time left:</span>
          <span className="sm:hidden">Time:</span>

          {/* Countdown display */}
          <div className="flex items-center gap-0.5 sm:gap-1 font-mono font-bold">
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span
              className="px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      {/* X button positioned at very right */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-1 rounded transition-colors hover:bg-stone-200/30"
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default CountdownBanner;
