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
      <div
        className="min-h-screen text-white"
        style={{
          background: "linear-gradient(to top, #0A1C34 0%, #000000 100%)",
        }}
      >

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<DashboardPage />} />
        </Routes>

      </div>
    </Router>
    </>
  )
}

export default App
