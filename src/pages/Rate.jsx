import vector1 from './../assets/vector1.png'
import vector2 from './../assets/vector2.png'

export default function Rate() {
    return (
        <div>
            {/* Title */}
            <h1 className="text-[40px] font-bold text-left text-white mb-2">
                Pasar
            </h1>

            <p className="text-[16px] text-left text-white mb-6">
                Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
            </p>

            {/* Rate Grafik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2].map((box, index) => (
                    <div
                        key={index}
                        className="bg-[#13213F]/40 rounded-xl p-4 flex justify-between items-center h-[130px]"
                    >
                        <div className="flex flex-col justify-between w-[40%] h-full">
                            <div className="text-sm font-normal text-gray-600">TKO/IDR</div>
                            <div className="text-[20px] font-bold text-white whitespace-nowrap">Rp 5,261.3</div>
                            <div className="text-sm font-normal text-[#FF3B3B]">-3.82%</div>
                        </div>

                        <div className="flex flex-col items-end w-[60%] pl-4">
                            <div className="w-full h-[70%] rounded-md flex items-center justify-center">
                                <span className="text-xs text-white"><img src={vector1}/></span>
                            </div>

                            <div className="text-[14px] font-bold text-[#959595] whitespace-nowrap">
                                Volume : 2,258 IDR
                            </div>
                        </div>
                    </div>
                ))}

                {[1, 2].map((box, index) => (
                    <div
                        key={index}
                        className="bg-[#13213F]/40 rounded-xl p-4 flex justify-between items-center h-[130px]"
                    >
                        <div className="flex flex-col justify-between w-1/3 h-full">
                            <div className="text-sm font-normal text-gray-600">TKO/IDR</div>
                            <div className="text-[20px] font-bold text-white whitespace-nowrap">Rp 5,261.3</div>
                            <div className="text-sm font-normal text-[#6EDC86]">-3.82%</div>
                        </div>


                        <div className="flex flex-col items-end w-[60%] pl-4">
                            <div className="w-full h-[70%] rounded-md flex items-center justify-center">
                                <span className="text-xs text-white"><img src={vector2}/></span>
                            </div>

                            <div className="text-[14px] font-bold text-[#959595] whitespace-nowrap">
                                Volume : 2,258 IDR
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}