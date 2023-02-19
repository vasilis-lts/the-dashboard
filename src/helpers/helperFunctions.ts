export function getHoursAndMinutes(date) {
  var d = new Date(date),
    hours = '' + d.getHours(),
    minutes = '' + d.getMinutes();

  if (hours.length < 2)
    hours = '0' + hours;
  if (minutes.length < 2)
    minutes = '0' + minutes;

  return [hours, minutes].join(':');
}

export function getDayAndMonth(date) {
  var d = new Date(date),
    // dayName = d.toLocaleString('default', { weekday: 'long' }),
    day = '' + d.getDate(),
    month = d.toLocaleString('default', { month: 'short' });

  return day + " " + month;
}

export function formatToDateString(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}