const result = require('./result');
const match = require('./match');

module.exports = {
  getLatestRound: result.getLatestRound,
  getLastTurn: result.getLatestRound, // Will be deprecated
  getResult: result.getResult,
  getDetailResult: result.getDetailResult,
  checkNumber: match.checkNumber
};
