const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    if (value === undefined){
      this.arr.push('');
      } else this.arr.push(value);
    return this
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    if (typeof position !== 'number' || position < 0 || position > this.getlength){
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    this.arr.reverse();
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const finalArr =this.arr.map(el => '( ' + el +' )');
    const result = finalArr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;

