import testReducer from '../../src/reducer/testReducer';
import * as types from '../../src/actions/type';

const defaultState = {test: true, count: 0};

describe('testReducer reducer', () => {
  it('handles INCREMENT_COUNT', () => {
    expect(
      testReducer(defaultState, {
        type: types.INCREMENT_COUNT,
        payload: 1
      })
    ).toEqual({
      test: true,
      count: 1
    });
  });
  it('handles DECREMENT_COUNT', () => {
    expect(
      testReducer(defaultState, {
        type: types.DECREMENT_COUNT,
        payload: 1
      })
    ).toEqual({
      test: true,
      count: -1
    });
  });
});
