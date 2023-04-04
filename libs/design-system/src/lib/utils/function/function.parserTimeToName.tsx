export function parserMonthToName(date: Date) {
  const parserToMonthNumber = new Date(date).getMonth();
  const monthsName = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  return monthsName[parserToMonthNumber];
}

export function parserDayToName(date: Date) {
  const millisecondPerDay = 24 * 60 * 60 * 1000;
  const daysUntilToday = Math.round(Math.abs((new Date(date).getTime() - new Date().getTime()) / millisecondPerDay));
  const monthsUntilToday = Math.round(daysUntilToday / 30);

  if (daysUntilToday === 0) return 'dziś';
  else if (daysUntilToday <= 31) return `${daysUntilToday} dni temu`;
  else if (monthsUntilToday <= 4) return `${monthsUntilToday} miesiące temu`;
  else if (monthsUntilToday <= 11) return `${monthsUntilToday} miesięcy temu`;
  else if (monthsUntilToday <= 23) return `rok temu`;
  else return `${Math.round(monthsUntilToday / 12)} lata temu`;
}

