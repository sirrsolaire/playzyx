import moment from "moment";

export function formatDate(inputDate) {
  const date = moment(inputDate);

  const formattedDate = date.format("MMM D, YYYY");

  return formattedDate;
}
