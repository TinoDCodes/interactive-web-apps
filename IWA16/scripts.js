const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  // dereferencing the athletes information from the athlete object
  const { firstName, surname, id, races } = athlete;
  const { date, time } = races.at(-1);

  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.innerText = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  const dateAsDate = new Date(date); // changing the date to type of Date instead of string
  const day = dateAsDate.getDate();
  const month = MONTHS[dateAsDate.getMonth()];
  const year = dateAsDate.getFullYear();

  const total = time[0] + time[1] + time[2] + time[3];

  const hours = Math.floor(total / 60); // used Math.floor to get the smallest integer portion
  const minutes = total % 60; // used modular operator to get the remainder portion

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, 0)}:${minutes}</dd>
  `;
  // above .padStart() only works on strings

  fragment.appendChild(list);

  return fragment;
};

// deferencing the different athletes' data from the data object
const { NM372, SV782 } = data.response.data;
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));
