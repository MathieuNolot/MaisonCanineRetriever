import { parse, isWithinInterval, getDay } from 'date-fns';

const restaurant = {
  "name": "Le paradisio",
  "openingPeriods": [
    {
      "days": ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      "start": "11:30",
      "end": "14:30"
    },
    {
      "days": ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      "start": "18:45",
      "end": "22:30"
    }
  ],
  "closingPeriods": [
    {
      datetimeStart: "2021-04-01T09:00:00.00Z",
      datetimeEnd: "2021-04-08T17:00:00.00Z"
    }
  ]
};

function isOpen(restaurant, dateTime) {

  const inputDate = parse(dateTime, "yyyy-MM-dd'T'HH:mm:ss.SSX", new Date());

  for (const closingPeriod of restaurant.closingPeriods) {
    const start = parse(closingPeriod.datetimeStart, "yyyy-MM-dd'T'HH:mm:ss.SSX", new Date());
    const end = parse(closingPeriod.datetimeEnd, "yyyy-MM-dd'T'HH:mm:ss.SSX", new Date());

    if (isWithinInterval(inputDate, { start, end })) {
      return false;
    }
  }

  const dayOfWeek = getDay(inputDate);
  const inputTime = inputDate.getTime();

  for (const openingPeriod of restaurant.openingPeriods) {
    // dayOfWeek start sunday
    if (openingPeriod.days.includes(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek - 1])) {
      const start = parse(openingPeriod.start, 'HH:mm', inputDate);
      const end = parse(openingPeriod.end, 'HH:mm', inputDate);

      if (isWithinInterval(inputTime, { start, end})) {
        return true;
      }
    }
  }

  return false;
}
