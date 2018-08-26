import * as Helper from '../src/utils/helper';

describe('helper', () => {
  it('should format a phone number', () => {
    const phoneNumber = '123-234-1234';
    const expectedResult = '(123) 234-1234';
    expect(Helper.formatPhoneNumber(phoneNumber)).toEqual(expectedResult);
  })

  it('should clean up a name', () => {
    const name = 'Chao*Shi';
    const expectedResult = 'Chao Shi';
    expect(Helper.formatName(name)).toEqual(expectedResult);
  })
})