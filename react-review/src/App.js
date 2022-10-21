import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Main, About, Projects} from './pages/';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
