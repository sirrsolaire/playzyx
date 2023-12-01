import moment from "moment";

export function getTimeAgo(time) {
  const dateTimeAgo = moment(new Date(time)).fromNow();
  return dateTimeAgo;
}

export const currentYear = moment().year();
export const currentDate = moment().format();
