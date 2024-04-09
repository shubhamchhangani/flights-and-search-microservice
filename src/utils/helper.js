function compareTime(dateTime1, dateTime2) {
  let time1 = new Date(dateTime1);
  let time2 = new Date(dateTime2);
  return time1.getTime() > time2.getTime();
}

module.exports = {
  compareTime,
};
