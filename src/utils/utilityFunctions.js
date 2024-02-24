export const getOrdinalSuffix = (number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
};

export const getFormattedDate = () => {
  const currentDate = new Date();
  // Get numeric day and its ordinal suffix
  const numericDay = currentDate.getDate();
  const dayWithOrdinal = `${numericDay}${getOrdinalSuffix(numericDay)}`;

  // Get month and year
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();

  // Formatted date string
  const formattedDate = `${dayWithOrdinal} ${month} ${year}`;

  return formattedDate;
};
