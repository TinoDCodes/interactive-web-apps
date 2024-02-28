const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment
const sectionBreak = "\n----------------------\n";

// check whether an item has been assigned to the 9 key of the holidays object
if (!holidays[futureId]) console.log(`ID ${futureId} not created yet`);
console.log(sectionBreak);

// create a new object with the same properties and values but not a ref to the original object
copied = { ...holidays[christmas], date: new Date(holidays[christmas].date) };
copied.name = "X-mas Day";
correctDate = copied.date;
correctDate.setHours(0, 0);
isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier);

if (isEarlier) copied.date = correctDate;
console.log("ID change:", holidays[christmas].id !== copied.id && copied.id);
console.log(
  "Name change:",
  holidays[christmas].name !== copied.name && copied.name
);
console.log(
  "Date change:",
  holidays[christmas].date !== copied.date &&
    `${copied.date.getDate()}/${
      copied.date.getMonth() + 1
    }/${copied.date.getFullYear()}`
);
console.log(sectionBreak);

// turning date property of holidays[0] to an actual Date value not string
holidays[0].date = new Date(holidays[0].date);

const firstHolidayTimestamp = Math.min(
  holidays[0].date.getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const lastHolidayTimestamp = Math.max(
  holidays[0].date.getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

const firstDay = firstHolidayDate.getDate().toString();
const firstMonth = (firstHolidayDate.getMonth() + 1).toString();
const lastDay = lastHolidayDate.getDate().toString();
const lastMonth = (lastHolidayDate.getMonth() + 1).toString();

console.log(
  `First holiday of the year: ${firstDay.padStart(
    2,
    "0"
  )}/${firstMonth.padStart(2, "0")}/${currentYear}`
);
console.log(
  `Last holiday of the year: ${lastDay.padStart(2, "0")}/${lastMonth.padStart(
    2,
    "0"
  )}/${currentYear}`
);

const randomHoliday = holidays[getRandomIntInclusive(0, 8)].date;
const randomHolidayDay = randomHoliday.getDate().toString();
const randomHolidayMonth = (randomHoliday.getMonth() + 1).toString();
console.log(
  `Random holiday: ${randomHolidayDay.padStart(
    2,
    "0"
  )}/${randomHolidayMonth.padStart(2, "0")}/${currentYear}`
);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
