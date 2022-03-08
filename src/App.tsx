import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './router';

function App() {
  let element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
