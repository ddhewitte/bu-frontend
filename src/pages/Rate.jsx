export default function Rate(){
    return (
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
    )
}