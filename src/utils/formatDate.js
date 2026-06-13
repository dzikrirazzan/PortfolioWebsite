const formatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const formatDate = (date) => formatter.format(new Date(date));

export default formatDate;
