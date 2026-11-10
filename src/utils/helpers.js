export function formatPhone(phone) {
  const formatted = phone.replace(/(\d{4})(\d{3})(\d{4})/, "$3 $2 $1");
  return formatted.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export function formatCurrency(value, unit = "تومان") {
  const formatted = new Intl.NumberFormat("fa-IR").format(value);
  return `${formatted} ${unit}`;
}

export const faDigitsNum = (number) =>
  String(number).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
