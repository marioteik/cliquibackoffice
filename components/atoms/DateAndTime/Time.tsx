"use client";

import { useEffect, useState } from "react";

function createDate() {
  return new Date()
    .toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace("AM", "")
    .replace("PM", "");
}

export default function Time() {
  const [time, setTime] = useState(createDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(createDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}
