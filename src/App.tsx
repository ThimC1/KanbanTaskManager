import React from 'react';
import TaskCard from './assets/taskcard';



function App() {

  const title='Do Market Research'
  const id="BUS-1"
  const points=5

  return (
    <div>
      <TaskCard title={title} id={id} points={points}/>
    </div>
  )
}

export default App;
