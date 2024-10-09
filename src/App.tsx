import React from 'react';
import Movies from './Containers/Movies.tsx';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Movies />
    </div>
  );
};

export default App;
