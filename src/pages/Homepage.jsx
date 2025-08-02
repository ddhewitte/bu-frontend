import { useState } from 'react'
import Header from './Header'
import Rate from './Rate'
import RateContent from './RateContent'
import logo from '../assets/logo.png'

export default function Homepage() {
    const [activeTab, setActiveTab] = useState('IDR')

    return (
        <>
            <div
                className="min-h-screen text-white"
                style={{
                    background: "linear-gradient(to top, #0A1C34 0%, #000000 100%)",
                }}
            >
                <Header logo={logo} />

                <main className="px-8 pb-10 md:px-[100px] mt-[50px]">
                    <Rate />
                    <RateContent activeTab={activeTab} />
                </main>
            </div>
        </>
    )
}