import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './Main';
import Session from './Session';
import './../App.scss';


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
