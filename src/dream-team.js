const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) !== true) {
        return false;
    }
    var result = [];
    for (var i = 0; i < members.length; i++) {
        if (typeof (members[i]) === 'string') {
            result.push(members[i].trim().substring(0, 1).toUpperCase());
        }
    }
    var array = result.sort();
    return array.join('');
}
