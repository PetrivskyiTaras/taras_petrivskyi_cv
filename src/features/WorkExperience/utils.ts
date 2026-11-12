import dayjs from 'dayjs';

const plural = (count: number, one: string, many: string) => `${ count } ${ count === 1 ? one : many }`;

// e.g. "Jan 2026 – Present · 11 mos" / "Feb 2023 – Apr 2026 · 3 yrs 3 mos"
export const getDatePeriodString = (startDate: string, endDate?: string): string => {
  const start = dayjs(startDate);
  const end = endDate ? dayjs(endDate) : dayjs();

  // +1 month so both the start and the end month are counted.
  const totalMonths = end.add(1, 'month').diff(start, 'month');
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const duration = [
    years > 0 ? plural(years, 'yr', 'yrs') : '',
    months > 0 ? plural(months, 'mo', 'mos') : '',
  ].filter(Boolean).join(' ');

  return `${ start.format('MMM YYYY') } – ${ endDate ? end.format('MMM YYYY') : 'Present' } · ${ duration }`;
};
