const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    var depth = 1;
    for (var i=0; i<arr.length; i++) {
      var elementDepth = this.calculateDepth(arr[i]);
      if (depth < elementDepth + 1) {
        depth = elementDepth + 1;
      }
    }
    return depth;
    
  }
};

