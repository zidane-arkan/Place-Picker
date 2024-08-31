import React, { useState, useEffect } from "react";
const TIMER = 3000;
export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  // Change progress bar per 10ms
  useEffect(() => {
    const remainingTimeInterval = setInterval(() => {
      return setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(remainingTimeInterval);
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
