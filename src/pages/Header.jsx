export default function Header({logo}){
    return(
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
    )
}