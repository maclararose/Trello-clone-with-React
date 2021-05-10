const cards = [
  {
    id: 'card-1',
    content: 'Study Ruby'
  },
  {
    id: 'card-2',
    content: 'Study JS'
  },
  {
    id: 'card-3',
    content: 'Make my work'
  },
];

const data = {
  lists:{
    'list-1':{
      id: 'list-1',
      title: 'To do',
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;