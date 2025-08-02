export default function RateContent({ activeTab }) {
    return (
        <>
            <div className="mt-10">
                <div className="flex border-[#2E3A59]">
                    {['Favorit', 'IDR', 'USD', 'BNB', 'BTC', 'ALTS'].map((tab) => (
                        <button
                            key={tab}
                            className={`text-[16px] font-bold px-4 py-2 rounded-[0px] bg-transparent
                        ${activeTab === tab ? 'text-[#E5933A] order-b-[4px] border-[#E5933A]' : 'text-[#BCBCBC]'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto mt-6">
                <table className="min-w-full text-left text-sm text-white">
                    <thead className="bg-none text-white">
                        <tr>
                            {[
                                "Pasangan",
                                "Harga Terakhir",
                                "Perubahan 24jam",
                                "Tertinggi / Terendah 24jam",
                                "Kapitalisasi Pasar",
                                "Volume 24 Jam"
                            ].map((label, idx) => (
                                <th key={idx} className="px-4 py-3 cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        <span>{label}</span>
                                        <div className="flex flex-col text-xs leading-none text-gray-600">
                                            <span>▲</span>
                                            <span>▼</span>
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>


                    <tbody className="bg-none divide-y divide-[#2E3A59]">
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">BTC/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#4CAF50]">+2.31%</td>
                            <td className="px-4 py-3">Rp 945jt / Rp 920jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">ETH/IDR</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3 text-[#FF3B3B]">-1.14%</td>
                            <td className="px-4 py-3">Rp 64jt / Rp 61jt</td>
                            <td className="px-4 py-3">98,832.93 / Rp 1,612,213,281.72</td>
                            <td className="px-4 py-3">1.538M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}