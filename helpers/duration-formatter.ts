import { intervalToDuration } from "date-fns";

export const formatDuration = (numberOfMinutes: number): string => {
  const now = new Date(0);
  const future = new Date(now.getTime() + (numberOfMinutes || 0) * 60 * 1000);
  const duration = intervalToDuration({ start: now, end: future });

  const parts = [];
  if (duration.days) parts.push(`${duration.days} d`);
  if (duration.hours) parts.push(`${duration.hours} h`);
  if (duration.minutes) parts.push(`${duration.minutes} min`);
  if (duration.seconds) parts.push(`${duration.seconds} sec`);

  const formattedDuration = parts.join(", ");

  return formattedDuration;
};
