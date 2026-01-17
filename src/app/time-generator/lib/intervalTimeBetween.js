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

export function intervalTimeBetween({ startTime, endTime, intervalMinutes = 1, count = 5 }) {
  const { start, end, now } = buildDateRange(startTime, endTime);

  const intervalMs = intervalMinutes * 60 * 1000;
  const allResults = [];

  // mulai dari start + interval (start tidak ikut)
  let cursor = new Date(start.getTime() + intervalMs);

  while (cursor <= end) {
    allResults.push(new Date(cursor));
    cursor = new Date(cursor.getTime() + intervalMs);
  }

  // Edge case: start === end atau interval > range
  if (allResults.length === 0) {
    allResults.push(new Date(start.getTime() + intervalMs));
  }

  let results = allResults;

  // 🔀 Jika lebih dari count → random sampling
  if (allResults.length > count) {
    const shuffled = [...allResults]
      .map((v) => ({ v, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(({ v }) => v);

    results = shuffled.slice(0, count);
  }

  // Urutkan kembali supaya rapi
  results.sort((a, b) => a - b);

  return {
    generatedAt: formatDateTime(now),
    timestampNow: formatUnixTimestamp(now),
    results,
  };
}
