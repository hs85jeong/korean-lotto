# korean-lotto
korean-lotto is implemented to get the result from the lotto site

## Installation
To use Korean-lotto in your project, run:
```shell
$ npm i --save korean-lotto
```

### Usage
```js
// Load package
var lotto = require('korean-lotto');
```

##### Get a latest round
```js
lotto.getLatestRound().then(turn => console.log(turn));
// '861'
```

##### Get a specific result
```js
lotto.getResult(861).then(result => console.log(result));
// { win: [ '10', '23', '29', '33', '37', '40' ], bonus: '16' }
```

##### Get a specific detail result
```js
lotto.getDetailResult(861).then(result => console.log(result));
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

##### Check input numbers whether it is matched
```js
lotto.checkNumber(862, ['10', '32', '38', '40', '42', '43']).then(result => console.log(result));
// { match: ['10', '38', '40', '42', '43'],
//   miss: ['32'],
//   ranking: '2'
// }
```

### Resources
- [API Documentation](https://github.com/hs85jeong/korean-lotto/blob/master/docs/api.md)