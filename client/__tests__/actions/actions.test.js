import * as actionCreators from '../../src/actions/actionCreators';
import * as types from '../../src/actions/type';

const payload = 1;

describe('actions', () => {
  it('should return INCREMENT_COUNT & payload', () => {
    const expectedAction = {
      type: types.INCREMENT_COUNT,
      payload
    };
    expect(actionCreators.incrementCountActionCreator(payload)).toEqual(expectedAction);
  });
  it('should return DECREMENT_COUNT & payload', () => {
    const expectedAction = {
      type: types.DECREMENT_COUNT,
      payload
    };
    expect(actionCreators.decrementCountActionCreator(payload)).toEqual(expectedAction);
  });
});
