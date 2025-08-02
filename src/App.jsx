import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import './App.css'
import Homepage from './pages/Homepage'
import DashboardPage from './pages/DashboardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<DashboardPage />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
