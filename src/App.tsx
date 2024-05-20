import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Row, Col} from 'reactstrap'

import { Home, About, AppPage, UserHamburger } from './index'

function App() {
  return (
    <Router>
      <Row md="10" className="col">
        <Col className='main-nav'>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/dashboard">Dashboard</Link>

        </Col>
        <Col md="2">
          <UserHamburger />
        </Col>
 

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/app-page" element={<AppPage />} />
        </Routes>
      </Row>
    </Router>
  );
}

export default App;
