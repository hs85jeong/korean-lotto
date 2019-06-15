const result = require('./result');
const match = require('./match');

module.exports = {
  getLastTurn: result.getLastTurn,
  getResult: result.getResult,
  getDetailResult: result.getDetailResult,
  checkNumber: match.checkNumber
};
