import React from 'react';
import { Routes, Route, Link } from 'react-router';
import Home from './components/pages/HomePage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Cats from './components/pages/MeetTheCats'
import Menu from './components/pages/CafeMenu'
import Events from './components/pages/CafeEvents'
import MeetTheCats from './components/pages/MeetTheCats'
import './App.css'

function App() {

  return (
    <>
    <Header />     
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
