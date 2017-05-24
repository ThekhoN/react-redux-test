import 'isomorphic-fetch';
import {polyfill} from 'es6-promise';
polyfill();
const url = 'https://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes';

export const incrementCountActionCreator = payload => {
  return {
    type: 'INCREMENT_COUNT',
    payload
  };
};

export const getQuotesSuccess = () => {
  return {
    type: 'GET_QUOTES_SUCCESS'
  };
};

export const decrementCountActionCreator = payload => {
  return {
    type: 'DECREMENT_COUNT',
    payload
  };
};

export const getQuotesActionCreator = payload => {
  return {
    type: 'GET_QUOTES',
    payload
  };
};

export const getQuotesAsyncActionCreator = () => {
  return (dispatch) => {
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(items => {
      dispatch(getQuotesActionCreator(items));
      dispatch(getQuotesSuccess());
    })
    .catch(err => {
      console.log('fetch error: ', err);
    });
  };
};
