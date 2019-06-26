# Korean-lotto API v1.0.2

#####  Table of Contents

- [Overview](#Overview)
- [API](#API)
  * [getLatestRound](#getlatestround)
  * [getResult](#getresultround)
  * [getDetailResult](#getdetailresultround)
  * [checkNumber](#checknumberround-numbers)

### Overview

Korean-lotto is a Node.js library which provides a API to get a lotto result from korean lotto site.

### API

#### getLastTurn() will be deprecated

#### getLatestRound()
- returns: <[Promise]<[string]>> Promise which resolves to the result value of latest lotto round

#### getResult(round)
- round <[string]|[number]> Round data which you want to know
- returns: <[Promise]<[Object]>> Resolves to the result data that matches with `round`
  - `win` <[Array]<[string]>> An array of all numbers matched with 1st
  - `bonus` <[string]> Bonus number

#### getDetailResult(round)
- round <[string]|[number]> Round data which you want to know
- returns: <[Promise]<[Object]>> Resolves to the result data that matches with `round`
  - `win` <[Array]<[string]>> An array of all numbers matched with 1st
  - `bonus` <[string]> Bonus number
  - `totalMoney` <[string]> Total winner money on this `round`
  - `amounts` <[Array]<[Object]>> An array of all information for each winner from 1st to 5th
    - `total` <[string]> Total winner money for each rank
    - `match` <[string]> Number of winners of each rank
    - `each` <[string]> Money of each winner of each rank

#### checkNumber(round, numbers)
- round <[string]|[number]> Round data which you want to know
- numbers <[Array]<[string]>> An array of numbers to check
- returns: <[Promise]<[Object]>>
  - `match` <[Array]<[string]>> An array of numbers matched with 1st
  - `miss` <[Array]<[string]>> An array of numbers unmatched with 1st
  - `ranking` <[string]> Matches ranking

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"
