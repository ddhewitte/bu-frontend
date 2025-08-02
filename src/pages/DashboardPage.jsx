import { useState } from 'react'
import Header from './Header'
import Rate from './Rate'
import RateContent from './RateContent'
import logo from '../assets/logo.png'

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('IDR')

    return (
        <>
            <Header logo={logo} />

            <main className="px-8 pb-10 md:px-[100px] mt-[50px]">
                <Rate />
                <RateContent activeTab={activeTab} />
            </main>
        </>
    )
}