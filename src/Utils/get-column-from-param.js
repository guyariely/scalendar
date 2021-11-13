export function getColumnFromParam(day) {
  const dayRef = {
    sun: 1,
    mon: 2,
    tue: 3,
    wed: 4,
    thu: 5,
    fri: 6,
    sat: 7,
  };

  return dayRef[day] || 0;
}
