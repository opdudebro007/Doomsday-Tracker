"use client";

import React, { useState, useEffect } from "react";
import { AVENGERS_DOOMSDAY_RELEASE_DATE } from "@/data/timeline";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(AVENGERS_DOOMSDAY_RELEASE_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center text-center">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <span className="text-2xl font-bold text-marvel-red">:</span>
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <span className="text-2xl font-bold text-marvel-red">:</span>
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <span className="text-2xl font-bold text-marvel-red">:</span>
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-heading font-bold w-12 text-white tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs text-text-secondary tracking-widest">{label}</span>
    </div>
  );
}
