import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div>
    <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Events" Component={Events} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
