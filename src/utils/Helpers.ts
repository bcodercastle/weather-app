import dayjs from "dayjs";
export const RE_DIGIT = new RegExp(/^\d+$/);

export function formatDate(inputDate, format) {
  const date = dayjs(inputDate);
  const formattedDate = date.format(format);
  return formattedDate;
}
