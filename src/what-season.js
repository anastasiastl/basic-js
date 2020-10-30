const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]')
    throw new Error('');
  var month = date.getMonth() + 1;
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'winter';
    case 3:
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 8:
      return 'summer';
    case 9:
    case 10:
    case 11:
      return 'fall';
  }
  /**if (month === 12 || month === 01 || month === 02) {
    return 'winter';
  } else if (month === 03 || month === 04 || month === 05) {
    return 'spring';
  } else if (month === 06 || month === 07 || month === 08) {
    return 'summer';
  } else if (month === 09 || month === 10 || month === 11) {
    return 'autumn (fall)';
  }**/
}

