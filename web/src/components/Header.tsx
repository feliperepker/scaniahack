import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";


export function Header(){
  const navigate = useNavigate()
  function getLogout(){
    logout()
    navigate(0)
  }
  
  return(
    <header className="w-full h-16 bg-[#041E42] flex items-center justify-between">
        <div className="flex items-center">
          <h1 onClick={() => {navigate('/ControlTower')}} className="text-gray-200 ml-8 font-scaniaHeadline cursor-pointer text-sm">FIND MY PART</h1>
          <div className="h-16 w-[1px] ml-4 bg-[#193458] "/>
          <Link className="flex items-center border-[#193458] justify-center h-16 w-28 text-gray-200 border-r-[1px] bg-[#041E42] text-[17px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" to={'/ControlTower'}>Find</Link>
          <Link className= " flex border-[#193458] items-center justify-center h-16 w-28 text-gray-200 border-r-[1px] bg-[#041E42] text-[17px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" to={'/Supplier'}>Supplier</Link>
          
        </div>
      <div className="flex items-center justify-center">
        <button className=" flex border-[#193458] items-center justify-center h-16 w-20 text-gray-200 border-r-[1px] bg-[#041E42] text-[17px] font-scaniaCondensed font-medium transition-all hover:bg-blue-300/[0.1]" onClick={getLogout}>Logout</button>
        <img onClick={() => {navigate('/ControlTower')}} className="w-10 h-10 ml-3 mr-3 cursor-pointer" src="/scania_symbol_L_rgb.ico" alt="" />
      </div>
    </header>
  )
} 