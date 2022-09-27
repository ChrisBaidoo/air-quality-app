export const readableDateTime = (date: string) => {
  const updatedLast = new Date(date);
  const today = new Date();
  const dateDifference = today.getTime() - updatedLast.getTime();

  const hour = 1000 * 60 * 60;
  const toHours = Math.round(dateDifference / hour);
  const oneDay = 1000 * 60 * 60 * 24;
  const toDays = Math.round(dateDifference / oneDay);

  let readableFormat;

  if (toDays < 1) {
    // hours
    let hours = Math.round(toHours);
    if (hours === 1) {
      readableFormat = `an hour ago`;
    } else {
      readableFormat = `${Math.round(toHours)} hours ago`;
    }
  } else if (toDays >= 1 && toDays < 7) {
    // days
    let days = Math.round(toDays);
    if (days === 1) {
      readableFormat = `${days} day ago`;
    } else {
      readableFormat = `${days} days ago`;
    }
  } else if (toDays >= 7) {
    // weeks
    let weeks = Math.round(toDays / 7);
    if (weeks === 1) {
      readableFormat = `${weeks} week ago`;
    } else {
      readableFormat = `${weeks} weeks ago`;
    }
  }

  if (readableFormat) {
    return `updated ${readableFormat}`;
  }
};
