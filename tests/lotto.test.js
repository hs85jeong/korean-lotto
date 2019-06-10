const { getLastTurn,  getResult, getDetailResult } = require('../lib/lotto');

describe('getLastTurn', () => {
  test('check to get get a last turn number correctly', async () => {
    const result = await getLastTurn();
    expect(result).toMatch(/\d/);
  });
});

describe('getResult', () => {
  let result;

  beforeAll(async () => {
    result = await getResult(862);
  });

  test('check to get correct win values', async () => {
    const expectedWins = ['10', '34', '38', '40', '42', '43'];
    expect(result.win).toEqual(expect.arrayContaining(expectedWins));
  });

  test('check to get the correct bonus value', async () => {
    const expectedBonus = '32';
    expect(result.bonus).toEqual(expectedBonus);
  });
});


describe('getDetailResult', () => {
  let result;

  beforeAll(async () => {
    result = await getDetailResult(862);
  });

  test('check to get correct win values', async () => {
    const expectedWins = ['10', '34', '38', '40', '42', '43'];
    expect(result.win).toEqual(expect.arrayContaining(expectedWins));
  });

  test('check to get the correct bonus value', async () => {
    const expectedBonus = '32';
    expect(result.bonus).toEqual(expectedBonus);
  });

  test('check to get correct total money', async () => {
    const expected = '80,609,005,000';
    expect(result.totalMoney).toEqual(expected);
  });

  test('check to get correct amounts', async () => {
    const expectedAmounts = [
      {
        total: '19,718,304,381',
        match: '9',
        each: '2,190,922,709'
      },
      {
        total: '3,286,384,101',
        match: '63',
        each: '52,164,827'
      },
      {
        total: '3,286,384,590',
        match: '2,042',
        each: '1,609,395'
      },
      {
        total: '5,238,250,000',
        match: '104,765',
        each: '50,000'
      },
      {
        total: '8,775,180,000',
        match: '1,755,036',
        each: '5,000'
      },
    ];
    expect(result.amounts).toMatchObject(expectedAmounts);
  });
});
