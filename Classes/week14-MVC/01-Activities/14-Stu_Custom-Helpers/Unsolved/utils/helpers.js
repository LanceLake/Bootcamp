module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY

  format_date: (date) => {

	const initialDate =  new Date(date);

    return `${initialDate.getMonth()}/${initialDate.getDay()}/${initialDate.getFullYear() + 5}`;
  },
};
