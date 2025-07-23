import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
