const rp = require('request-promise');
const cheerio = require('cheerio');

const removeWon = require('./util').removeWon;

const lottoRootUrl = 'https://dhlottery.co.kr/gameResult.do?method=byWin';

module.exports.getLatestRound = function () {
  let options = {
    uri: lottoRootUrl,
    transform: body => cheerio.load(body)
  };

  return new Promise((resolve, reject) => {
    rp(options)
      .then($ => {
        let childs = $('#dwrNoList').children();
        if (childs.length !== 0) {
          let last = childs[0];
          resolve($(last).val());
        } else {
          reject(new Error('There is no data!'));
        }
      }).catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

module.exports.getResult = function (turn) {
  return new Promise((resolve, reject) => {
    if (turn < 1) {
      return reject(new Error('Invalid turn'));
    }

    let resultUrl = lottoRootUrl + `&drwNo=${turn}`;
    let options = {
      uri: resultUrl,
      transform: body => cheerio.load(body)
    };

    rp(options)
      .then($ => {
        let wins = [];
        $('.num.win').find('.ball_645').each(function (index, value) {
          wins.push($(this).text());
        });
        let bonus = $('.num.bonus').find('.ball_645').text();
        resolve({
          win: wins,
          bonus: bonus
        });
      }).catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

module.exports.getDetailResult = function (turn) {
  return new Promise((resolve, reject) => {
    if (turn < 1) {
      return reject(new Error('Invalid turn'));
    }

    let resultUrl = lottoRootUrl + `&drwNo=${turn}`;
    let options = {
      uri: resultUrl,
      transform: body => cheerio.load(body)
    };

    rp(options)
      .then($ => {
        let wins = [];
        $('.num.win').find('.ball_645').each(function (index, value) {
          wins.push($(this).text());
        });
        let bonus = $('.num.bonus').find('.ball_645').text();
        let totalMoney = $('.list_text_common').find('strong').text();

        let tableTRs = $('.tbl_data.tbl_data_col').find('tbody').children();
        let amounts = [];
        $(tableTRs).each(function (index, value) {
          let amount = {};
          $(this).children().each(function (index, value) {
            if (index === 1) {
              amount.total = removeWon($(this).text());
            } else if (index === 2) {
              amount.match = $(this).text();
            } else if (index === 3) {
              amount.each = removeWon($(this).text());
              amounts.push(amount);
            }
          });
        });

        resolve({
          win: wins,
          bonus: bonus,
          totalMoney: removeWon(totalMoney),
          amounts: amounts
        });
      }).catch(error => {
        console.error(error);
        reject(error);
      });
  });
};
