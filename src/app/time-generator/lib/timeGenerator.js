export function randomTimeBetween({
  startTime, // "HH:MM"
  endTime, // "HH:MM"
  count = 5,
}) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);

  let startDt = new Date(today);
  startDt.setHours(sh, sm, 0, 0);

  let endDt = new Date(today);
  endDt.setHours(eh, em, 0, 0);

  // Lintas hari
  if (endDt < startDt) {
    endDt.setDate(endDt.getDate() + 1);
  }

  const totalSeconds = Math.floor((endDt - startDt) / 1000);

  if (count > totalSeconds + 1) {
    throw new Error("Jumlah generate melebihi interval waktu!");
  }

  const usedSeconds = new Set();
  const results = [];

  while (results.length < count) {
    const sec = Math.floor(Math.random() * (totalSeconds + 1));
    if (!usedSeconds.has(sec)) {
      usedSeconds.add(sec);
      results.push(new Date(startDt.getTime() + sec * 1000));
    }
  }

  return {
    generatedAt: now.toISOString().replace("T", " ").slice(0, 19),
    timestampNow: Math.floor(now.getTime() / 1000),
    results: results.sort((a, b) => a - b),
  };
}
