const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  var cnt = new Array(arr.length).fill(1);
  for (var i = 0; i < arr.length; i++) {
    var cntI = 0;
    switch (arr[i]) {
      case '--discard-next':
        if (i + 1 < arr.length) cnt[i + 1] = 0;
        break;
      case '--discard-prev':
        if (i - 1 >= 0) cnt[i - 1] -= 1;
        break;
      case '--double-next':
        if (i + 1 < arr.length) cnt[i + 1] *= 2;
        break;
      case '--double-prev':
        if (i - 1 > 0) cnt[i - 1] = Math.min(cnt[i - 1] * 2, 3);
        break;
      default:
        cntI = cnt[i];
        break;
    }
    cnt[i] = cntI;
  }

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < cnt[i]; j++) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
