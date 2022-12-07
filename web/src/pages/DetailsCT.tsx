import { useEffect, useState } from "react"
import { Card } from "../components/Card";
import { BrasilProps, OtherCountryProps } from "../components/Inventory";
import api from "../services/api";


export function DetailsCT(){
  const [details, setDetails] = useState<OtherCountryProps[]>([])
  const [image, setImage] = useState<BrasilProps>()
  useEffect(() =>{
    getDetails()
   
  },[])

  async function getDetails() {
    var url = window.location.href;
    var _url = url.split("=");
    var peca = _url[1].split("+")
   await api.get(`/Details/${_url[1]}`).then(response =>{
     setDetails(response.data)
    })
    
      api.get(`/MonaBrasil/${peca[1]}`).then(response =>{
      setImage(response.data)
    });
  }
  
  return(
    <div className="flex flex-col items-center"> 
      <h1 className="font-bold font-scaniaHeadline mt-8 mb-[3vh] text-3xl">See the details of {details[0]?.long_Desc_Central} in {details[0]?.country == 'SW' ? 'Sweden' : details[0]?.country == 'BR' ? 'Brazil' : 'Belgica'} </h1>
    <div className="flex items-center justify-center w-screen gap-6">
      <img className="w-[40%] h-[50vh] mt-4 border-[1px] object-cover border-gray-300" src={image?.image} alt="" />
      <div className="flex gap-2">
        {
          details.map(item => {
            return( <Card
            key={item.id}
               region={item.place}
               qnt={item.total_Balance ? String(item.total_Balance) : '0'}
             />)
           })
            }
      </div>
    </div>
    
      
    </div>
  )
}