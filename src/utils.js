export const getTimePosted = (date) => {
  let posted = '';
  let timeDiff = 0;
  const currentDate = Date.now();
  const parsedDate = Date.parse(date);
  const diff = currentDate - parsedDate;
  const diffInDays = diff / (24 * 60 * 60 * 1000);
  const diffInHours = diff / (60 * 60 * 1000);
  const diffInMinutes = diff / (60 * 1000);

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

export const getTodayDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padToTwoDigits(date.getMonth() + 1);
  const day = padToTwoDigits(date.getDate());
  const hours = padToTwoDigits(date.getHours());
  const min = padToTwoDigits(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${min}`;
};

const padToTwoDigits = (number) => {
  return number.toString().padStart(2, '0');
};
