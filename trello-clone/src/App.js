import React, { useState } from 'react';
import List from './components/List/List';
import Store from './utils/Store';

function App() {
  const [data, setData] = useState(Store);
  return (
    <div className="App">
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>
      })}
    </div>
  );
}

export default App;
