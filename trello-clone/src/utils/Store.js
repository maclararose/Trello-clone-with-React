const cards = [
  {
    id: 'card-1',
    title: 'Study Ruby'
  },
  {
    id: 'card-2',
    title: 'Study JS'
  },
  {
    id: 'card-3',
    title: 'Make my work'
  },
];

const data = {
  lists:{
    'list-1':{
      id: 'list-1',
      title: 'To do',
      cards,
    },
    'list-2':{
      id: 'list-2',
      title: 'Doing',
      cards:[],
    },
    'list-3':{
      id: 'list-3',
      title: 'Done',
      cards:[],
    },
  },
  listIds: ['list-1', 'list-2', 'list-3'],
};

export default data;