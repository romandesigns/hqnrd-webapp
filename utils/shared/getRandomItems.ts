export function getRandomItems<T>(items: T[], limit = 6) {
  const totalAvailable = items.length;

  // Don’t mutate original array
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  const selected = shuffled.slice(0, limit);

  return { selected, totalAvailable };
}
