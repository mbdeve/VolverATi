"use client";

import { useEffect, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function diffToParts(diffMs: number): CountdownParts {
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);
  return { days, hours, minutes, seconds, isOver: false };
}

/**
 * Cuenta regresiva en vivo hacia una fecha objetivo.
 *
 * El cálculo inicial se hace en un valor "vacío" y solo se resuelve con
 * Date.now() dentro de useEffect (cliente). Así el HTML del servidor y el
 * primer render del cliente coinciden, evitando errores de hidratación.
 */
export function useCountdown(targetDate: Date): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const tick = () => setParts(diffToParts(targetDate.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return parts;
}
