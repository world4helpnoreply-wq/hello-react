import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import ToDoList from './ToDoList.jsx';
import Calculator from './Calculator.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <h3>Menu</h3>
        <ul>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/todo" 
              className={location.pathname === '/todo' ? 'active' : ''}
            >
              TO DO
            </Link>
          </li>
          <li>
            <Link 
              to="/calculator" 
              className={location.pathname === '/calculator' ? 'active' : ''}
            >
              CALCULATOR
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;