import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './Main';
import Session from './Session';
import './../App.scss';
import scrollbar from 'smooth-scrollbar';

scrollbar.init(document.querySelector('#smooth-scroll'));

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path = "/" element={<Main />}/>
          <Route exact path = "/Session" element={<Session />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
