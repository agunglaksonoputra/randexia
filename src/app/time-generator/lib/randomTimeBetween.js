import { formatDateTime, formatTimeOnly, formatUnixTimestamp } from "@/lib/timeFormatter";

function buildDateRange(startTime, endTime) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);

  const start = new Date(today);
  start.setHours(sh, sm, 0, 0);

  const end = new Date(today);
  end.setHours(eh, em, 0, 0);

  if (end <= start) {
    end.setDate(end.getDate() + 1);
  }

  return { start, end, now };
}

export function randomTimeBetween({ startTime, endTime, count = 5 }) {
  const { start, end, now } = buildDateRange(startTime, endTime);

  const totalSeconds = Math.floor((end - start) / 1000);

  // Jika hanya 0–59 detik → 1 hasil saja
  const maxPossible = Math.max(1, totalSeconds);

  const finalCount = Math.min(count, maxPossible);

  const used = new Set();
  const results = [];

  while (results.length < finalCount) {
    // +1 supaya tidak pernah sama dengan start
    const sec = Math.floor(Math.random() * totalSeconds) + 1;

    if (!used.has(sec)) {
      used.add(sec);
      results.push(new Date(start.getTime() + sec * 1000));
    }
  }

  results.sort((a, b) => a - b);

  return {
    generatedAt: formatDateTime(now),
    timestampNow: formatUnixTimestamp(now),
    results,
  };
}
