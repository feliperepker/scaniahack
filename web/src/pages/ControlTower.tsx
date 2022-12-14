
import { useState } from "react";
import { BrasilProps, Inventory, OtherCountryProps } from "../components/Inventory";
import api from "../services/api";
import { SupProps } from "./SupInformations";


export function ControlTower(){
  const [inputData, setInputData] = useState('')
  const [dataBrasil, setDataBrasil] = useState<BrasilProps>(Object)
  const [dataSuecia, setDataSuecia] = useState<OtherCountryProps>(Object)
  const [dataBelgica, setDataBelgica] = useState<OtherCountryProps>(Object)
  const [dataSup, setDataSup] = useState<SupProps[]>([])
    console.log(inputData)

    async function getData(){
      try{
        await api.get(`/MonaBrasil/${inputData}`).then(response =>{
          setDataBrasil(response.data)
        });
        await api.get(`/MonaSuecia/${inputData}`).then(response =>{
          setDataSuecia(response.data)
        });
        await api.get(`/MonaBelgica/${inputData}`).then(response =>{
          setDataBelgica(response.data)
        });
        await api.get(`/DataSup/${inputData}`).then(response =>{
          setDataSup(response.data)
        });

      }catch(err){
        alert(err)
      }
}
  return(
    <div className="flex flex-col justify-center items-center w-screen ">
      <h1 className="font-bold font-scaniaHeadline mt-8 mb-[3vh] text-3xl">Fill the input to find your part</h1>
    <div className='flex w-screen justify-between items-center'>
      <div className='ml-20 mt-8 w-[50%]'>
        <input placeholder="Write here the part number" onChange={event => setInputData(event.target.value)} type="text" className="h-10 w-[50%] border-[1px] bg-gray-100 border-gray-300 rounded mb-8 p-2"/>
        <button className="
       ml-4 bg-green-600 rounded transition-all p-2 pl-8 pr-8 text-white font-normal font-scaniaCondensed hover:bg-green-700" onClick={getData}>FIND</button>
        <div className="flex items-baseline">
          <h2 className="text-xl font-scaniaCondensed font-bold">Part name:</h2>
          <p className="ml-2 text-lg font-scaniaCondensed">{dataBrasil.long_Desc_Central}</p>
        </div>
        { dataBrasil.image ?
         <img className="w-[80%] h-[50vh] mt-4 border-[1px] object-cover border-gray-300" src={dataBrasil.image} alt="" /> : <h3 className="mt-4 border-[1px] flex items-center justify-center border-gray-300 w-[90%]
         h-[50vh]">Choose a part number to see the datas</h3> 
        }
        
      </div>
        <Inventory
        brasilData={dataBrasil}
        sueciaData={dataSuecia}
        belgicaData={dataBelgica}
        supData={dataSup}
        />
    </div>
    </div>

  )
}