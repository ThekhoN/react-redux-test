const defaultQuotes = [
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
    },
    {
    id: "3",
    createdAt: 1488096422,
    quote: "Over the field of battle, the smell of blood rises like a promise.",
    author: "Bloodseeker",
    submittedBy: "Blood Cyka",
    tag: [
    "dota"
    ]}
];

const quotes = (state = {status: 'loaded', data: defaultQuotes}, action) => {
  switch (action.type) {
    case 'GET_QUOTES':
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
};

export default quotes;
