import 'whatwg-fetch';

export const incrementCountActionCreator = payload => {
  return {
    type: 'INCREMENT_COUNT',
    payload
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

export const getQuotesAsyncActionCreator = url => {
  return (dispatch) => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(items => {
      dispatch(getQuotesActionCreator(items));
    })
    .catch(err => {
      console.log('fetch error: ', err);
    });
  };
};
