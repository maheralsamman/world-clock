import React, { useState, useEffect } from "react";

const Clock = ({ name, timezone }) => {
  const getTime = () => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + timezone);
    return currentTime;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const tictac = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(tictac);
  }, []);

  return (
    <div className="board__clock">
      <p className="board__time">{time.toLocaleTimeString("en-US",{hour12:false})}</p>
      <p className="board__location">{name}</p>
    </div>
  );
};

export default Clock;
