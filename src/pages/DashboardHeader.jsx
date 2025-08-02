export default function DashboardHeader({logo}){
    return(
        <header className="w-full h-[132px] flex items-center justify-between px-8 md:px-[100px]" style={{ background: "rgba(19, 33, 63, 0.2)" }}>

          {/* Logo and Menu */}
          <div className="flex items-center gap-10">
            <img src={logo} className="w-[68px] h-[68px]" />
          </div>

          {/* Sign In & Up */}
          <div className="hidden md:flex gap-4">
            
          </div>

        </header>
    )
}