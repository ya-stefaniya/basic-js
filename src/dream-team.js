const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) {
    return false
  };

  let resultArr = members.filter(element => typeof (element) === 'string');
  return resultArr.map(element => element.trim()[0].toLocaleUpperCase()).sort().join('') || false;
};
