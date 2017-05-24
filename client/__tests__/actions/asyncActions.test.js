// using redux-mock-store for async actions
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from '../../src/actions/actionCreators';
import * as types from '../../src/actions/type';

import nock from 'nock';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockedResponse = [
  {
    id: "1",
    createdAt: 1488096542,
    quote: "I've been to hell and back, and back to hell and back.",
    author: "Lion",
    submittedBy: "Dotka Power",
    tag: [
    "dota"
    ]
  },
  {
    id: "2",
    createdAt: 1488096482,
    quote: "Who's the tough guy now, tough guy?",
    author: "Meepo",
    submittedBy: "Noob Meepo Player",
    tag: [
    "dota"
    ]
  }
];

describe('async actions', function () {
  afterEach(() => {
    nock.cleanAll();
  });
  it('returns GET_QUOTES_SUCCESS && QUOTES on success', () => {
    nock('https://58b2874a78d2121200bfa8dd.mockapi.io/api')
    .get('/quotes')
    .reply(200, mockedResponse);

    const expectedActions = [
      {payload: mockedResponse, type: types.GET_QUOTES},
      {type: types.GET_QUOTES_SUCCESS},
    ];
    const store = mockStore({todos: []});
    return store.dispatch(actionCreators.getQuotesAsyncActionCreator())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
