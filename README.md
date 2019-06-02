# korean-lotto
korean-lotto is implemented to get the result from the lotto site

## Installation

### Using npm:
```shell
$ npm i --save korean-lotto
```

### Using in Node.js:
```js
// Load package
var lotto = require('korean-lotto');
```

### Get last turn
```js
var lotto = require('korean-lotto');

lotto.getLastTurn().then(turn => console.log(turn));
// 861
```

### Get specific lotto result
```js
var lotto = require('korean-lotto');

lotto.getResult(861);
// { win: [ '10', '23', '29', '33', '37', '40' ], bonus: '16' }
```

### Get specific lotto detail result
```js
var lotto = require('korean-lotto');

lotto.getDetailResult(861);
// { win: [ '11', '17', '19', '21', '22', '25' ],
//   bonus: '24',
//   totalMoney: '81,032,551,000',
//   amounts:
//   [ { total: '19,488,435,376', match: '4', each: '4,872,108,844' },
//     { total: '3,248,072,620', match: '65', each: '49,970,348' },
//     { total: '3,248,073,744', match: '2,256', each: '1,439,749' },
//     { total: '5,432,200,000', match: '108,644', each: '50,000' },
//     { total: '9,099,495,000', match: '1,819,899', each: '5,000' } ]
// }
```

