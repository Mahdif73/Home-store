import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);

export function created(created_at) {
  return dayjs(created_at)
    .calendar("jalali")
    .locale("fa")
    .format("D MMMM YYYY");
}
