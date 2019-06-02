var lotto = require('./lib/index');

// lotto.getLastTurn().then(count => console.log(count));
// lotto.getResult(861).then(balls => console.log(balls));
// lotto.getDetailResult(-1).then(balls => console.log(balls)).catch(err => console.log(err));

(async () => {
  var result = await lotto.getDetailResult(1);
  console.log(result);
})();
