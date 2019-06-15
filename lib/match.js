const { getResult } = require('./result');

module.exports.checkNumber = function(turn, values) {
  return new Promise((resolve, reject) => {
    if (!turn || !values) {
      return reject(new Error('Please input correct parameters.'));
    }

    if (!Array.isArray(values) || values.length !== 6) {
      return reject(new Error('Input values should be the array. ex) ["1", "2", "3", "4", "5", "6"]'));
    }
    
    getResult(turn).then(result => {
      const wins = result.win;
      const bonus = result.bonus;

      let match = [], miss = [];
      values.forEach(value => {
        if (wins.includes(value)) {
          match.push(value);
        } else {
          miss.push(value);
        }
      });

      let ranking = '0';
      switch (match.length) {
      case 0:
      case 1:
      case 2:
        ranking = '-1';
        break;
      case 3:
        ranking = '5';
        break;
      case 4:
        ranking = '4';
        break;
      case 5:
        ranking = '3';
        break;
      case 6:
        ranking = '1';
        break;
      }

      if (ranking === '3') {
        if (values.includes(bonus)) {
          ranking = '2';
        }
      }

      resolve({
        match: match,
        miss: miss,
        ranking: ranking 
      });
    });
  });
}