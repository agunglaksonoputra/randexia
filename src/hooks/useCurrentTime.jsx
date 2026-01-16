"use client";
import { useEffect, useState } from "react";

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function useCurrentTime() {
  const [time, setTime] = useState(null); // ⬅️ PENTING

  useEffect(() => {
    const update = () => {
      setTime(formatTime(new Date()));
    };

    update(); // set pertama kali setelah mount
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}
