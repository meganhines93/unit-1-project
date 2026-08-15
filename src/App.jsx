import React from 'react';
import { Routes, Route, Link } from 'react-router';
import Home from './components/pages/HomePage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Cats from './components/pages/MeetTheCats'
import Menu from './components/pages/CafeMenu'
import Events from './components/pages/CafeEvents'
import MeetTheCats from './components/pages/MeetTheCats';
import './App.css'

function App() {

  return (
    <>
    <Header />
      
      <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cats">Meet The Cats</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/events">Events</Link></li>
      </nav>
     
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<MeetTheCats />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
      </Routes>

    <Footer />
    </>
  );
}

export default App
