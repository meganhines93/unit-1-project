import { useState } from 'react'
import HomePage from './components/pages/HomePage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HomePage />
    <Footer />
    </>
  )
}

export default App
