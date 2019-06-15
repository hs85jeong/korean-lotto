const { checkNumber } = require('../lib/match');

describe('checkNumber', () => {
  test('1st ranking', async () => {
    const actual = ['10', '34', '38', '40', '42', '43'];
    const expected = ['10', '34', '38', '40', '42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    expect(result.miss).toEqual(expect.arrayContaining([]));
    expect(result.ranking).toEqual('1');
  });

  test('2nd ranking', async () => {
    const actual = ['10', '32', '38', '40', '42', '43'];
    const expected = ['10', '38', '40', '42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    // 32 is bonus number
    expect(result.miss).toEqual(expect.arrayContaining(['32']));
    expect(result.ranking).toEqual('2');
  });

  test('3rd ranking', async () => {
    const actual = ['9', '34', '38', '40', '42', '43'];
    const expected = ['34', '38', '40', '42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    expect(result.miss).toEqual(expect.arrayContaining(['9']));
    expect(result.ranking).toEqual('3');
  });

  test('4th ranking', async () => {
    const actual = ['9', '32', '38', '40', '42', '43'];
    const expected = ['38', '40', '42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    expect(result.miss).toEqual(expect.arrayContaining(['9', '32']));
    expect(result.ranking).toEqual('4');
  });

  test('5th ranking', async () => {
    const actual = ['9', '32', '39', '40', '42', '43'];
    const expected = ['40', '42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    expect(result.miss).toEqual(expect.arrayContaining(['9', '32', '39']));
    expect(result.ranking).toEqual('5');
  });

  test('match 0 - 2', async () => {
    const actual = ['9', '32', '39', '41', '42', '43'];
    const expected = ['42', '43'];
    const result = await checkNumber(862, actual);
    expect(result.match).toEqual(expect.arrayContaining(expected));
    expect(result.miss).toEqual(expect.arrayContaining(['9', '32', '39', '41']));
    expect(result.ranking).toEqual('-1');
  });
});