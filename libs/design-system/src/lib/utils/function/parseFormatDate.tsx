import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pl');
dayjs.extend(relativeTime);

function isToday(date: dayjs.Dayjs): boolean {
  const today = dayjs().startOf('day');
  return date.isSame(today, 'day');
}
export function parseFormatDate(date: Date): string {
  const formattedDate = dayjs(date);

  if (isToday(formattedDate)) {
    return `Dzisiaj, ${formattedDate.format('DD-MM-YYYY HH:mm')}`;
  }
  return formattedDate.format('DD-MM-YYYY HH:mm');
}
