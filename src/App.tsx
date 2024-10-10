import React, { useState } from 'react';
import Movies from './Containers/Movies/Movies.tsx';
import './app.css';
import Jokes from './Containers/Jokes/Jokes.tsx';


const App: React.FC = () => {
  const [page,setPage] = useState<boolean>(true);
  return (
    <div>
      <button onClick={()=>setPage(!page)} className='change-button'>Change task</button>
      {page? <Movies/> : <Jokes/>}
    </div>
  );
};

export default App;
