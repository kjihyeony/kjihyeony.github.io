import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './Main';
import Session from './Session';
import './../App.scss';
import scrollbar from 'smooth-scrollbar';
import Home from './../pages';

scrollbar.init(document.querySelector('#smooth-scroll'));

function App() {
  return (
    <div>
        <Home />
        <Routes>
          <Route exact path = "/" element={<Main />}/>
          <Route exact path = "/Session" element={<Session />}/>
        </Routes>

    </div>
  );
}

export default App;
