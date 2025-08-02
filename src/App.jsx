import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          background: "linear-gradient(to top, #0A1C34 0%, #000000 100%)",
        }}
      >
        <header className="w-full h-[132px] flex items-center justify-between px-8 md:px-[100px]" style={{ background: "rgba(19, 33, 63, 0.2)" }}>

          {/* Logo and Menu */}
          <div className="flex items-center gap-10">
            <img src={logo} className="w-[68px] h-[68px]" />

            <nav className="flex gap-6">
              <a href="#" className="text-white text-sm hover:text-gray-300">Home</a>
              <a href="#" className="text-white text-sm hover:text-gray-300">Markets</a>
              <a href="#" className="text-white text-sm hover:text-gray-300">News</a>
            </nav>
          </div>

          {/* Sign In & Up */}
          <div className="hidden md:flex gap-4">
            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#D57C17] to-[#956836]">
              <button
                className="w-[121px] h-[43px] rounded-full bg-none text-white px-4 py-[12px] flex items-center justify-center text-base"
              >
                Sign In
              </button>
            </div>

            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#D57C17] to-[#956836]">
              <button
                className="w-[121px] h-[43px] rounded-full bg-none text-white px-4 py-[12px] flex items-center justify-center text-base"
              >
                Sign Up
              </button>
            </div>
          </div>

        </header>


        <main className="px-8 md:px-[100px] mt-[50px]">
          <div className="px-6 py-10">
            {/* Title */}
            <h1 className="text-[40px] font-bold text-left text-white mb-2">
              Pasar
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-left text-white mb-6">
              Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
            </p>

            {/* 4 Kotak Grafik Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((box, index) => (
                <div
                  key={index}
                  className="bg-[#13213F]/40 rounded-xl p-4 flex justify-between items-center h-[130px]"
                >
                  {/* Kolom kiri */}
                  <div className="text-white">
                    <p className="font-semibold text-lg">Judul {box}</p>
                    <p className="text-sm opacity-70">Deskripsi singkat</p>
                  </div>

                  {/* Kolom kanan */}
                  <div className="text-white text-2xl font-bold">
                    {Math.floor(Math.random() * 1000)}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>

      </div>
    </>
  )
}

export default App
