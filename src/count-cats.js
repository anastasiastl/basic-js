const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var catsNumber = 0;
  for (var i=0; i<matrix.length; i++) {
    for (var j=0; j<matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        catsNumber++;
      }
    }
  }
  return catsNumber;
};