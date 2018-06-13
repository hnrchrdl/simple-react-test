// Returns items for current page only
export function pagingFilter(items, page = 0, itemCount = 10) {
  return items.slice(0, page * itemCount);
}

// If date is new than 10.000h, it is considered new
export function isNewJob(date) {
  const HOURS = 10000;
  return (Date.now() - Date.parse(date)) / 360000 < HOURS;
}

export function sortJobsByRelevance(a, b) {
  return a.relevanceScore - b.relevanceScore;
}
