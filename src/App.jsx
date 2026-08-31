import { Routes, Route } from 'react-router';
import Home from './components/pages/HomePage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Menu from './components/pages/CafeMenu'
import Events from './components/pages/CafeEvents'
import MeetTheCats from './components/pages/MeetTheCats'
import CatDetails from './components/pages/CatDetails'
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
          <Route path="/cats/:id" element={<CatDetails />} />
          <Route path="*"
            element={
              <ErrorPage>
                <p>Sorry, we couldn't find that page.</p>
              </ErrorPage>
            } />
      </Routes>

    <Footer />
    </>
  );
}

export default App
