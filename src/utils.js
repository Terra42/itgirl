export const getTimePosted = (date) => {
  let posted = '';
  let timeDiff = 0;
  let currentDate = Date.now();
  let parsedDate = Date.parse(date);
  let diff = currentDate - parsedDate;
  let diffInDays = diff / (24 * 60 * 60 * 1000);
  let diffInHours = diff / (60 * 60 * 1000);
  let diffInMinutes = diff / (60 * 1000);

  if (diffInDays >= 1) {
    timeDiff = Math.round(diffInDays);
    posted = `${String(timeDiff)} days ago`;
  } else if (diffInHours >= 1) {
    timeDiff = Math.round(diffInHours);
    posted = `${String(timeDiff)} hours ago`;
  } else {
    timeDiff = Math.round(diffInMinutes);
    posted = `${String(timeDiff)} minutes ago`;
  }

  return posted;
};
