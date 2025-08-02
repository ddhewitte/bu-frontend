import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import './App.css'
import Header from './pages/Header'
import Rate from './pages/Rate'
import RateContent from './pages/RateContent'


function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('IDR');

  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          background: "linear-gradient(to top, #0A1C34 0%, #000000 100%)",
        }}
      >

        <Header logo={logo} />

        <main className="px-8 md:px-[100px] mt-[50px]">
          <Rate />
          <RateContent activeTab={activeTab}/>
        </main>

      </div>
    </>
  )
}

export default App
