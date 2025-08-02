import { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import logo from '../assets/logo.png'
import { MdDashboard } from 'react-icons/md'
import ChartBar from '../assets/chart_bar.png'
import ComponentLogo from '../assets/component.png'

const menuItems = [
  { name: 'Dashboard', icon: <MdDashboard fontSize="small" /> },
  { name: 'Deposit', icon: <MdDashboard fontSize="small" /> },
  { name: 'Withdraw', icon: <MdDashboard fontSize="small" /> },
  { name: 'Member', icon: <MdDashboard fontSize="small" /> },
  { name: 'Verification (KYC)', icon: <MdDashboard fontSize="small" /> },
  { name: 'Reset 2FA Request', icon: <MdDashboard fontSize="small" /> },
  { name: 'Daily Report', icon: <MdDashboard fontSize="small" /> },
  { name: 'Setting', icon: <MdDashboard fontSize="small" /> },
]

const summaryCards = [
  {
    title: 'Total Deposit',
    value: 'Rp 1.000.000',
    label: 'Deposit',
    icon: ComponentLogo,
  },
  {
    title: 'Total Withdraw',
    value: 'Rp 850.000',
    label: 'Withdraw',
    icon: ComponentLogo,
  },
  {
    title: 'New Members',
    value: '120',
    label: 'Member',
    icon: ComponentLogo,
  },
  {
    title: 'KYC Requests',
    value: '45',
    label: 'Verification',
    icon: ComponentLogo,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('IDR')
  const [activeMenu, setActiveMenu] = useState('Dashboard')

  return (
    <>
      <div className="min-h-screen text-white bg-black">
        <DashboardHeader logo={logo} />

        <div className="flex min-h-screen">
          <aside
            className="w-[269px] bg-[#050911] text-white pt-[35px] px-6"
            style={{ height: '100vh' }}
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center text-white text-opacity-40 hover:text-opacity-100 transition-opacity duration-200 bg-transparent"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 px-4 py-10 text-white max-w-[1140px] mx-auto overflow-hidden">
            <div className="flex justify-between items-center mb-6 flex-wrap">
              <div>
                <h1 className="text-2xl font-bold mb-3 text-white">Welcome John Doe</h1>
                <h4 className="text-base text-white/80">How are you today ...</h4>
              </div>

              <div className="flex items-center gap-2 text-white mt-4 md:mt-0">
                <span className="text-sm mr-2">Filter By:</span>

                <div className="relative">
                  <select className="appearance-none w-[116px] h-[39px] bg-gray-700 text-white pl-3 pr-6 rounded">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    ▼
                  </span>
                </div>

                <div className="relative">
                  <select className="appearance-none w-[116px] h-[39px] bg-gray-700 text-white pl-3 pr-6 rounded">
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-transparent rounded shadow-md overflow-hidden">
              <div className="flex flex-nowrap gap-6 flex-wrap md:flex-nowrap">
                <div className="bg-[#050911] rounded-[20px] p-6 w-full md:w-[50%] h-[430px] flex flex-col gap-6 min-w-0">
                  <h2 className="text-white text-xl font-semibold">
                    Selamat datang di halaman <strong>{activeMenu}</strong>
                  </h2>
                  <img
                    src={ChartBar}
                    className="w-full h-full object-cover rounded bg-transparent"
                  />
                </div>

                <div className="flex flex-wrap gap-4 w-full md:w-[50%] h-[430px] min-w-0">
                  {summaryCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-[#050911] rounded-[20px] p-4 w-[48%] h-[200px] text-white flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <img src={card.icon} alt="icon" className="w-6 h-6" />
                        <h3 className="text-[20px] font-bold text-white">{card.title}</h3>
                      </div>
                      <div>
                        <p className="text-[24px] font-normal text-white">{card.value}</p>
                      </div>
                      <div>
                        <p className="text-[16px] font-normal text-white">{card.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
