import { FormEvent, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";
import { isAuthenticated, login } from "../services/auth";


export function Login(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  async function getLogin(event: FormEvent){
        event.preventDefault()
        try{
          const response = await api.post('/Login',{
            "username": user,
            "password": password
          });
          login(response.data);
          navigate('/ControlTower')
          navigate(0)
        }catch(err){
          alert(err)
        }
  }

  useEffect(() =>{
    const auth = isAuthenticated()
    auth ? navigate('/ControlTower') : ''
  },[])
  return(
    <div className="flex">
      <div className="w-[30%] h-screen bg-gray-200 flex flex-col justify-center items-center ">
        <img src="/scania_symbol_L_rgb.ico" alt="" className="w-20 mb-4"/>
        <h2 className="font-scaniaHeadline mb-4 text-center text-2xl font-bold">WHERE IS MY PART <br/> <span className="text-xl font-medium">A MANAGEMENT TOOL</span></h2>
        <form onSubmit={getLogin} className="flex flex-col w-[80%]">
          <input placeholder="Your SSB" onChange={event => setUser(event.target.value)} type="text" className="h-10 border-[1px] bg-gray-100 border-gray-300 rounded mb-4 p-2" />
          <input placeholder="********" onChange={event => setPassword(event.target.value)} type="password" className="h-10 border-[1px] bg-gray-100 border-gray-300 rounded mb-4 p-2" />
          <button type="submit" className="bg-[#041E42] text-white h-10 rounded transition-all hover:bg-[#153664]">Login</button>
        </form>
      </div>
      <img className="w-[70%] h-screen object-cover" src="./loginimage.png" alt="" />
    </div>
  )
}